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
void addNode(int d)
{
node* temp = new node;
temp->data = d;
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
void showList()
{
node* temp = head;
while (temp != NULL)
{
 cout << temp->data << " ";

 temp = temp->next;
}
cout << endl;
}
//simply display the list in the backward order
void showBackList()
{
node* temp = tail;
while (head != temp)
{
 cout << temp->data << " ";

 temp = temp->prev;
}
cout << head->data << " " << endl;
}
//permenantly reverse the order
void reverse()
{
node *START = head;
node *END = tail;
int temp;
while (START != END->next)
{
 temp = START->data;
 START->data = END->data;
 END->data = temp;

 START = START->next;
 END = END->prev;
}
}
int main()
{
int x[] = { 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 };
int size = sizeof(x)/sizeof(x[0]);
for (int i=0; i<size; i++)
{
 addNode(x[i]);
}
cout << "Original list: ";
showList();
cout << "Temporarily reversed: ";
showBackList();
reverse();
cout << "Permanently reversed: ";
showList();
return 0;
}
