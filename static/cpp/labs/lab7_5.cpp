#include <iostream>
using namespace std;
struct Queue
{
int size;
int *arr;
int head = -1;
int tail = -1;
Queue()
{
 size = 10;
 arr = new int[size]; //dynamic array
}
Queue(int s)
{
 size = s;
 arr = new int[s]; //dynamic array
}
bool isEmpty()
{
 if (head == -1) { return true; }
 else { return false; }
}
bool isFull()
{
 bool b = ((head==0 && tail==size-1) || (tail==(head-1)%(size-1))) ? true : false;
 return b;
}
void push(int n)
{
 if (isFull())
 {
 cout << "Queue is Full" << endl;
 }
 if (isEmpty())
 {
 head = tail = 0;

 arr[tail] = n; // Insert First Element
 }
 else if (tail == size-1 && head != 0)
 {
 tail = 0; //reset to 0

 arr[tail] = n; //insert a new element
 }
 else
 {
 tail++;
 arr[tail] = n;
 }
} 
int pop()
{
 int temp = 99999;

 if (!isEmpty())
 {
 temp = arr[head];

 arr[head] = NULL;

 if (head == tail)
 {
 head = -1;
 tail = -1;
 }
 else if (head == size-1)
 {
 head = 0;
 }
 else
 {
 head++;
 }
 }

 return temp;
}
void display()
{
 if (isEmpty())
 {
 cout << "Empty Queue." << endl;
 }
 else
 {
 cout << "Elements: ";

 for (int i = head; i != tail+1; i= (i+1) % size)
 {
 cout << arr[i] << " ";
 }

 cout << endl;
 }
}
};
int main()
{
Queue q1(10);
cout << q1.isEmpty() << endl; //1
cout << q1.pop() << endl; //99999
q1.push(3);
q1.push(5);
q1.push(9);
q1.push(1);
q1.display();
cout << q1.pop() << endl;
cout << q1.pop() << endl;
q1.display();
q1.push(12);
q1.push(15);
q1.push(21);
q1.display();
q1.push(22);
q1.push(24);
q1.display();

return 0;
}
