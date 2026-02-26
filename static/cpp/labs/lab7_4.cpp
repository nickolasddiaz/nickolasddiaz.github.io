#include<iostream>
using namespace std;
class Queue
{
int size;
int *queue = new int[size];
int head = 0; //the first element
int tail = -1;

public:
 Queue()
 {
 size = 10;
 }
 Queue(int _size)
 {
 size = _size;
 }
 void push(int x)
 {
 if( tail == size-1)
 {
 cout << "Queue is full";
 }
 else
 {
 tail++;

 queue[tail] = x;
 }
 }

 void pop()
 {
 cout << "Element popped: " << queue[head] << endl;

 for (int i=1; i<=tail; i++)
 {
 queue[i-1] = queue[i];
 }

 queue[tail] = NULL;

 tail--;
 }

 void peek()
 {
 if (tail < 0)
 {
 cout << "Empty queue." << endl;
 }
 else
 {
 cout << queue[head] << endl;
 }
 }

 void display()
 {
 int i;
 for( i = 0; i <= tail; i++)
 {
 cout << queue[i] << " ";
 }

 cout << endl;
 }
};
int main()
{
int *x = new int[10];
cout << "Enter 10 integers: ";
cin >> x[0] >> x[1] >> x[2] >> x[3] >> x[4] >>
 x[5] >> x[6] >> x[7] >> x[8] >> x[9];
Queue *q1 = new Queue(10);
for (int i=0; i<10; i++)
{
 q1->push(x[i]); //insert elements
}
q1->peek();
q1->display();

q1->pop();
q1->display();
q1->pop();
q1->pop();
q1->display();
return 0;
}
