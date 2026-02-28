#include <iostream>
#include <cmath>
using namespace std;
void jumpSearch(int x[], int size, int n)
{
int start = 0;
int end = sqrt(size); //the square root of array length
while (x[end] <= n && end < size)
{
 start = end; //it it is not correct block then shift block

 end += sqrt(size);

 if(end > size - 1)
 {
 end = size; //if right exceeds then bound the range
 }
}
bool isFound = false;
for(int i = start; i<end; i++) //perform linear search in selected block
{
 if(x[i] == n)
 {
cout << n << " is found at index: " << i << endl;
 isFound = true;
 }
}
if (isFound == false)
{
 cout << n << " is not found." << endl;
}
}
int main()
{
int x[10] = { 12, 29, 34, 57, 65, 72, 83, 98, 104, 117 };
int size = sizeof(x) / sizeof(x[0]);
jumpSearch(x, size, 83);
jumpSearch(x, size, 84);
}
