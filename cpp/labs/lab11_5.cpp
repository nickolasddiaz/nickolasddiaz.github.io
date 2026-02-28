#include <iostream>
using namespace std;
#define MAX_SIZE 10
int arr[MAX_SIZE];
void mergeArray(int a, int b, int c, int d)
{
int t[50];
int i = a, j = c, k = 0;
while (i <= b && j <= d)
{
 if (arr[i] < arr[j])
 {
 t[k++] = arr[i++];
 }
 else
 {
 t[k++] = arr[j++];
 }
}
//collect remaining elements
while (i <= b)
{
 t[k++] = arr[i++];
}

while (j <= d)
{
 t[k++] = arr[j++];
}

for (i = a, j = 0; i <= d; i++, j++)
{
 arr[i] = t[j];
}
}
void mergeSort(int i, int j)
{
int m;
if (i < j)
{
 m = (i + j) / 2;
 mergeSort(i, m);
 mergeSort(m + 1, j);

 // Merging two arrays
 mergeArray(i, m, m + 1, j);
}
}
int main()
{
int i;
cout << "Enter " << MAX_SIZE << " integers: ";

for (i = 0; i < MAX_SIZE; i++)
{
 cin >> arr[i];
}
mergeSort(0, MAX_SIZE - 1);
cout << "Sorted list: ";

for (i = 0; i < MAX_SIZE; i++)
{
 cout << arr[i] << " ";
}
}