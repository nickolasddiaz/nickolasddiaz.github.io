#include <iostream>
using namespace std;
//global objects
int head = 0;
int tail = -1;
int *queue = new int[tail+1];
bool isEmpty()
{
return (tail < 0);
}
void peek()
{
if (isEmpty())
{
 cout << "Empty queue." << endl;
}
else
{
 cout << "Current head: " << queue[head] << endl;
}
}
int getCurrentSize()
{
return (tail + 1);
}
void push(int n)
{
tail++;
int *temp = new int[tail+1];
if (tail > 0)
{
 for (int i=0; i<tail; i++)
 {
 temp[i] = queue[i];
 }
}
temp[tail] = n;
cout << temp[tail] << " is pushed." << endl;

queue = temp;
}
void pop()
{
cout << queue[head] << " is popped." << endl;
for (int i=1; i<=tail; i++)
{
 queue[i-1] = queue[i]; //move every element ahead by 1 position
}
queue[tail] = NULL; //deallocate the memory of current tail
int *temp = new int[tail-1];
for (int i=0; i<tail; i++)
{
 temp[i] = queue[i];
}
queue = temp;
tail--; //designate new tail
}
void showQueue()
{
cout << "Queue elements: ";
if (tail > 0)
{
 int i = 0;

 while (i <= tail)
 {
 cout << queue[i] << " ";

 i++;
 }
 cout << endl;
}
else
{
 cout << "Empty queue" << endl;
}
}
int main()
{
cout << "Empty queue? " << isEmpty() << endl; //1

push(3);
push(5);
peek(); //3
push(9);
push(1);
cout << "Current size: " << getCurrentSize() << endl; //4
push(12);
push(15);
push(18);
push(21);
push(22);
push(24);
cout << "Current size: " << getCurrentSize() << endl; //10

showQueue();

pop(); //3
pop();
pop();
pop();
showQueue();

peek(); //12
cout << "Current size: " << getCurrentSize() << endl; //6
}
