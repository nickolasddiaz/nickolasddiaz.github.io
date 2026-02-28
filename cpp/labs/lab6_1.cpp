#include <iostream>
#define size (sizeof(stack) / sizeof(stack[0]))
using namespace std;
//global object
int stack[20];
int top = -1;
void push(int n)
{
if (top >= (int) size)
{
 cout << "Error: Stack Overflow...." << endl;
}
else
{
 top++;
 stack[top] = n;

 cout << stack[top] << " is pushed." << endl;
}
}
void pop()
{
if (top <= -1)
{
 cout << "Error: Stack Underflow...." << endl;
}
else
{
cout << stack[top] << " is popped." << endl;

 stack[top] = NULL; //nullify current top

 top--; //decrease
}
}
void peek()
{
if (top < 0)
{
 cout << "Stack is empty. Nothing to peek on." << endl;
}
else
{
 cout << "Current top: " << stack[top] << endl;
}
}
void showStack()
{
if (top>=0)
{
 cout << "Stack elements: ";

 for(int i=top; i>=0; i--)
 {
 cout << stack[i] <<" ";
 }

 cout<<endl;
}
else
{
 cout << "Stack is empty" << endl;
}
}
int main()
{
peek();
for (int i=0; i< size; i++) //add 20 elements
{
 push(i);
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