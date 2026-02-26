#include <iostream>
using namespace std;
struct node
{
int data;
node* next;
};
node* head = NULL;
node* tail = NULL;
void addAtEnd(int n)
{
node *temp = new node;
temp->data = n;
temp->next = NULL;
if (head == NULL)
{
 head = temp;
 tail = temp;
}
else
{
 tail->next = temp;
 tail = tail->next;
}
}
void showList()
{
node *temp = head;
while (temp != NULL)
{
 cout << temp->data << " ";
 temp = temp->next;
}
cout << endl;
}
void deleteAtBegin()
{
node *temp = new node;
temp = head;
head = head->next;
delete temp;
}
void deleteAtEnd()
{
node *prev = new node;
node *temp = new node;
temp = head;
while (temp->next != NULL)
{
 prev = temp;
 temp = temp->next;
}
tail = prev;
prev->next = NULL;
delete temp;
}
void deleteAtPosition(int p)
{
node *temp = new node;
node *prev = new node;
temp = head;
for (int i=1; i<p; i++)
{
 prev = temp;
 temp = temp->next;
}
prev->next = temp->next;
}
void deleteAllNode()
{
node *temp = head->next;
while (temp != NULL)
{
 head->next = temp->next;
 temp->next = NULL;
 delete temp;
 temp = head->next;
}
head = NULL;
cout << "empty list now.";
}
int main()
{
cout << "Insert elements: ";
addAtEnd(2);
addAtEnd(5);
addAtEnd(8);
addAtEnd(11);
addAtEnd(16);
showList();
deleteAtPosition(3);
showList();
deleteAtBegin();
showList();
deleteAtEnd();
showList();
deleteAllNode();
showList(); //show nothing
};