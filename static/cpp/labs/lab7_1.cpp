#include <iostream>
#define SIZE (sizeof(queue) /sizeof(queue[0]))
using namespace std;
int queue[10];
int head = 0;
int tail = -1;
int peek()
{
if (tail < 0)
{
 return 0;
}
else
{
 return queue[head];
}
}
bool isEmpty()
{
return (tail < 0);
}
bool isFull()
{
return (tail == SIZE);
}
void push(int n)
{
if (!isFull())
{
 tail++;

 queue[tail] = n;

 cout << queue[tail] << " is pushed." << endl;
}
}
void pop()
{
cout << queue[head] << " is popped" << endl; //display the current head.
for (int i=1; i<=tail; i++)
{
 queue[i-1] = queue[i]; //move every element ahead by 1 position
}
queue[tail] = NULL; //deallocate the memory of current tail
tail--; //designate new tail
}
int getCurrentSize()
{
return (tail + 1);
}
void showQueue()
{
cout << "Queue elements: ";
if (tail >= 0)
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

push(6);
push(17);
cout << "Current front: " << peek() << endl; //3
push(25);
push(12);
cout << "Current size: " << getCurrentSize() << endl; //4
push(33);
push(27);
push(46);
push(60);
push(18);
push(24);
cout << "Current size: " << getCurrentSize() << endl; //10

showQueue();

pop(); //3
pop();
pop(); 
pop();
showQueue();

cout << "Current front: " << peek() << endl; //12
cout << "Current size: " << getCurrentSize() << endl; //6
}
