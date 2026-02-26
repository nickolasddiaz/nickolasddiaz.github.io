#include <iostream>
using namespace std;
void comparisonSort(int x[], int size)
{
int min = 0;
int temp;

for (int j=0; j<size; j++)
{
 min = j;

 for (int i=j; i<size; i++)
 {
 if (x[i] < x[min]) { min = i; }
 }

 temp = x[j];
 x[j] = x[min];
 x[min] = temp;
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
int x[] = { 14, 6, -9, 20, 39, 52, -11, 73, 6, 41, 55, -23, 39, 68, 27 };
int size = sizeof(x) / sizeof(x[0]);
comparisonSort(x, size);
show(x, size);
return 0;
}
