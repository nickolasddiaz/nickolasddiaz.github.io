#include <iostream>
using namespace std;
class Stack
{
private:
 int top;
public:
 int stack[10]; //Maximum size of Stack

 Stack()
 {
 top = -1;
 }

 void push(int x)
 {
 if(top >= 10)
 {
 cout << "Stack Overflow \n";
 }
 else
 {
 top++; //move one level up

 stack[top] = x;

 cout << x << " inserted \n";
 }
 }
 int pop()
 {
 if (top < 0)
 {
 cout << "Stack Underflow \n";

 return 0; //means 0 element
 }
 else
 {
 int temp = stack[top];

 top--; //move one level down

 return temp;
 }
 }
 void isEmpty()
 {
 if(top < 0)
 {
 cout << "Stack is empty \n";
 }
 else
 {
 cout << "Stack is not empty \n";
 }
 }
void display()
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
 cout << "Stack is empty";
 }
}
};
int main()
{
Stack s1;
s1.push(10);
s1.push(11);
s1.push(12);
s1.push(13);
s1.push(14);
s1.isEmpty();
s1.display();
cout << s1.pop() << endl;
s1.display();
}