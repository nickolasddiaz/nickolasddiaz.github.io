/*
* Filename: ex6_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
//global object
int SIZE = 0; //variable that keep track of stack size
int *stack = new int[SIZE]; //a resizable array
//push operation
int *push(int n)
{
int *temp = new int[SIZE+1];
temp[SIZE] = n;
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



void findMin()
{
int mini = 999999;
if (SIZE > 0)
{
 cout << "Min element: ";
 for (int i=SIZE-1; i>=0; i--)
 {
 if( mini > stack[i])
 mini = stack[i];
 } }
else
{
 cout << "Empty stack." << endl;
}
cout << mini;
}

int main()
{
int size; 
cout << "Enter the size of linked list: ";
cin >> size;

for (int i=0; i< size; i++) {
 int inputs;
 cout << " Give me a number:\n";
 cin >> inputs;
 stack = push(i);
}
showStack();

findMin();
return 0;
}
