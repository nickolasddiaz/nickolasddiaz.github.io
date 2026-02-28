#include <iostream>
#include <ctime>
using namespace std;
double findMax(double d[], int n, double max)
{
if (n==0)
{
 return max;
}
else // recursion case
{
 if (d[n] > max)
 {
 max = d[n];
 }

 return (findMax(d, n-1, max));
}
}
double findMin(double d[], int n, double min)
{
if (n==0)
{
 return min;
}
else // recursion case
{
 if (d[n] < min)
 {
 min = d[n];
 }

 return (findMin(d, n-1, min));
}
}
int main()
{
srand((int) time(0));
double d[15] = {};
int size = sizeof(d) / sizeof(d[0]);

for (int i=0; i<size; i++) // populate 15 random number
{
 d[i] = (double) rand() / RAND_MAX;
 cout << d[i] << " ";
}

cout << endl;

cout << "Max: " << findMax(d, size-1, d[0]) << endl;
cout << "Min: " << findMin(d, size-1, d[0]) << endl;
}
