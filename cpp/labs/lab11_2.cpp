#include <iostream>
using namespace std;
void insertionsort(int x[], int size)
{
int j, temp;
if (size>0)
{
 insertionsort(x, size-1);

 temp = x[size-1]; // temporary place
 j = size-2; // identify the place before size-1
 while (j>=0 && temp < x[j]) //swap only when temp < x[j]
 {
 x[j+1]=x[j]; //slide bigger numbers over
 j--;
 }
 x[j+1]=temp; //insert new number in empty space
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
int x[] = {16, 12, -10, 17, 11, 27, 14, -15, 20, 19, 15, 35, 13, 18 };
int size = sizeof(x) / sizeof(x[0]);
insertionsort(x, size);
show(x, size);
return 0;
}