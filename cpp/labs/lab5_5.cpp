#include <iostream>
using namespace std;
struct node
{
int data;
node *prev;
node *next;
};
node *head = NULL;
node *tail = NULL;
void addAtEnd(int n)
{
node *temp = new node;
temp->data = n;
temp->prev = tail;
temp->next = NULL;
if (tail == NULL)
{
 head = temp;
}
else
{
 tail->next = temp;
}
tail = temp;
}
void addAtBegin(int n)
{
node *temp = new node;
temp->data = n;
temp->prev = NULL;
temp->next = head;
if (head == NULL)
{
 tail = temp;
}
else
{
 head->prev = temp;
}
head = temp;
}
void addBeforeNode(node *t, int n)
{
node *temp = new node;
temp->data = n;
temp->next = t;
temp->prev = t->prev;
t->prev = temp;
if (t->prev == NULL)
{
 head = temp;
}
}
void addAfterNode(node *t, int n)
{
node *temp = new node;
temp->data = n;
temp->prev = t;
temp->next = t->next;
t->next = temp;
if (t->next == NULL)
{
 tail = temp;
}
}
void addAtPosition(int p, int n)
{
node *prev = new node;
node *cur = new node;
node *temp = new node;
cur = head;
for (int i=0; i<p; i++)
{
 prev = cur;
 cur = cur->next;
}
temp->data = n;
prev->next = temp;
temp->next = cur;
}
void showList(node *head)
{
while (head != NULL)
{
 cout << head->data << " ";
 head = head->next;
}
cout << endl;
}
void deleteAtPosition(int p)
{
node *cur = new node;
node *prev = new node;
cur = head;
for (int i=1; i<p; i++)
{
 prev = cur;
cur = cur->next;
}
prev->next = cur->next;
}
int main()
{
for (int i = 0; i<20; i++)
{
 addAtEnd(i + 10);
}
showList(head);
addAtBegin(9);
showList(head);
addAtEnd(37);
showList(head);
addAtPosition(7, 81);
showList(head);
deleteAtPosition(11);
showList(head);
}
