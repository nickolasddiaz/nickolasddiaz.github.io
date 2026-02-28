#include <iostream>
using namespace std;
struct node
{
int data;
node* next;
};
node* head = NULL;
node* tail = NULL;
void addAtBegin(int n)
{
node *temp = new node();
temp->data = n;
temp->next = head;
head = temp;
}
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
void addByPosition(int pos, int value)
{
node *pre = new node;
node *cur = new node;
node *temp = new node;
cur = head;
for (int i=1; i<pos; i++)
{
 pre = cur;
 cur = cur->next;
}
temp->data=value;
pre->next=temp;
temp->next=cur;
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
bool isEmpty()
{
node *temp = head;
if (!temp) { return true; }
else { return false; }
}
int main()
{
cout << "Empty linked list: " << isEmpty() << endl;
cout << "Inserted elements: ";
addAtEnd(2);
addAtEnd(5);
addAtEnd(8);
addAtEnd(11);
addAtEnd(16);
showList();
cout << "Empty linked list: " << isEmpty() << endl;
cout << "\nInsertion at begin:" << endl;
addAtBegin(7);
addAtBegin(18);
showList();
cout << "\nInsertion as position 5: " << endl;
addByPosition(5, 9);
showList();
};
