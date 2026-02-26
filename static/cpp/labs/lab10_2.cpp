#include <iostream>
using namespace std;
bool binarySearch(int x[], int n, int size)
{
bool IsFound = false;

int low = 0;
int high = size - 1;
int middle = 0;

while (high >= low)
{
 middle = (low + high) / 2;

 if (x[middle] == n)
{
 IsFound = true;

 break;
 }
 else if (x[middle] < n)
 {
 low = middle + 1;
 }

 else //if (x[middle] > n)
 {
 high = middle - 1;
 }
}

return IsFound;
}
int main()
{
int x[] = { 6, 8, 9, 10, 11, 14, 15, 17, 18, 21, 23, 27 };
int size =(sizeof(x)/sizeof(x[0]));

cout << "14: " << binarySearch(x, 14, size) << endl;
cout << "20: " << binarySearch(x, 20, size) << endl;
}