#include <iostream>
using namespace std;
//global object
int SIZE = 0; //variable that keep track of stack size
int *stack = new int[SIZE]; //a resizable array
//push operation
int *push(int n)
{
int *temp = new int[SIZE+1];
if (SIZE > 0)
{
 for (int i=0; i<SIZE; i++)
 {
 temp[i] = stack[i];
 }
}
temp[SIZE] = n;
cout << temp[SIZE] << " is pushed." << endl;
SIZE++;
return temp;
}
//peek operation
void peek()
{
if (SIZE > 0)
{
 cout << "Current top: " << stack[SIZE-1] << endl;
}
else
{
 cout << "Empty stack." << endl;
}
}
//pop operation
int *pop()
{
int *temp = new int[SIZE-1];
if (SIZE > 0)
{
 for (int i=0; i<SIZE-1; i++)
 {
 temp[i] = stack[i];
 }
}
cout << stack[SIZE-1] << " is popped." << endl;
stack[SIZE-1] = NULL; //nullified the top element
SIZE--;
return temp;
}
void showStack()
{
if (SIZE > 0)
{
 cout << "Stack elements: ";

 for (int i=SIZE-1; i>=0; i--)
 {
 cout << stack[i] <<" ";
 } 
 cout << endl;
}
else
{
 cout << "Empty stack." << endl;
}
}
int main()
{
int size; //variable for size of linked list
cout << "Enter the size of linked list: ";
cin >> size;
peek();
showStack();
for (int i=0; i< size; i++) //add 20 elements
{
 stack = push(i);
}
showStack();
peek();
for (int i=0; i<5; i++) //pop 5 times
{
 stack = pop();
 peek(); //peek after pop
}
showStack();
return 0;
}
