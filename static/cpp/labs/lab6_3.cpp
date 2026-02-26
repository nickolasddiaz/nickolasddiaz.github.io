#include <iostream>
using namespace std;
struct node
{
int data;
node *next;
};
node* top = NULL;
void push(int n)
{
node* temp = new node;
temp->data = n;
temp->next = top;
top = temp;
}
void pop()
{
if (top==NULL)
{
 cout << "Stack Underflow" << endl;
}
else
{
 cout << "Element popped: " << top->data << endl;
 top = top->next;
}
}
void peek()
{
if (top == NULL)
{
 cout << "Stack is empty. Nothing to peek on." << endl;
}
else
{
 cout << "Current top: " << top->data << endl;
}
}
void showStack()
{
node* temp;
if(top==NULL)
{
 cout << "stack is empty...";
}
else
{
 temp = top;
 cout << "Elements are: ";

 while (temp != NULL)
 {
 cout << temp->data << " ";
 temp = temp->next;
 }
}
cout << endl;
}
int main()
{
peek();
string continued = "y";
int n;
while (continued == "y")
{
 cout << "Enter an integer: ";
 cin >> n;
 push(n);
 cout << "Do you want to continue? [y/n]: ";
 cin >> continued;
}
showStack();
peek();
for (int i=0; i<5; i++) //pop 5 times
{
 pop();
 peek(); //peek after pop
}
showStack();
return 0;
}
