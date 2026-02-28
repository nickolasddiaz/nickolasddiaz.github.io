#include <iostream>
using namespace std;
void bubbleSort(int x[], int size)
{
bool swapped = true;
int j = 0;
int temp;

while (swapped)
{
 swapped = false;
 j++;

 for (int i = 0; i<size-j; i++)
 {
 if (x[i] > x[i+1])
 {
 temp = x[i];
 x[i] = x[i + 1];
 x[i+1] = temp;
 swapped = true;
 }
 }
}
}
void show(int x[], int size)
{
for (int i=0; i<size; i++)
{
 cout << x[i] << " ";
}
}
int main()
{
int x[] = { 24, 17, 20, -19, 52, 73, -6, 41, 37, 55, 39, -21, 68, 27 };
int size = sizeof(x) / sizeof(x[0]);
bubbleSort(x, size);
show(x, size);
return 0;
}