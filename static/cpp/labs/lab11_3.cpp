#include <iostream>
#include <ctime>
using namespace std;
int * selectionSort(int x[], int size)
{

for (int i=0; i < size-1; i++)
{
 int index = i;
 for (int j = i+1; j<size; j++)
 {
 if (x[j] < x[index])
 {
 index = j;
 }
 }

 int temp = x[index];
 x[index] = x[i];
 x[i] = temp;
}
return x;
}
int main()
{
int size = 25;
int *x = new int[25];
srand(time(0)); // Initialize random number generator
cout << "Original: " << endl;
for (int i=0; i<size-1; i++) // populate the elements
{
 x[i] = (rand() % 1000) + 1;

 cout << x[i] << " ";
}
int *y = selectionSort(x, size); // sorting
cout << "\n\nSorted:" << endl;
for (int i=0; i<size-1; i++)
{
 cout << y[i] << " ";
}
}
