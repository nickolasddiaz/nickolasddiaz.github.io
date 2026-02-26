#include <iostream>
using namespace std;
struct node
{
int data;
node *next;
};
node* head = NULL;
node* tail = NULL;
void push(int n)
{
node* temp = new node;
temp->data = n;
temp->next = NULL;
if (head == NULL) //means no node exists
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
void pop()
{
node* temp = new node;
temp = head;

if (head == NULL)
{
 cout << "Queue underflow" << endl;
}
else
{
 cout << "Element popped: " << head->data << endl;
 temp = temp->next;
 head = temp;
}
}
void peek()
{
if (head == NULL)
{
 cout << "Queue underflow" << endl;
}
else
{
 cout << "Current front: " << head->data << endl;
}
}
bool IsEmpty()
{
if (head == NULL)
{
 return true;
}
else
{
 return false;
}
}
void showQueue()
{
node* temp;
temp = head;
if ((head == NULL) && (tail == NULL))
{
 cout << "Empty queue." << endl;
}
cout << "Queue elements are: ";
while (temp != NULL)
{
 cout << temp->data << " ";
 temp = temp->next;
}
cout << endl;
}
int main()
{
cout << "Empty queue? " << IsEmpty() << endl;
push(3);
push(5);
push(9);
push(1);
push(12);
peek();
push(15);
push(18);
push(21);
push(22);
push(24);
showQueue();
pop();
showQueue();
pop();
showQueue();
peek();
return 0;
}
