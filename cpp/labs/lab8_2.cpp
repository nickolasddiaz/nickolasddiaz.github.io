#include <iostream>
using namespace std;
long sum(long n)
{
if (n > 0) // recursion case
{
 long sum = 0;
 long i = 1;
 while (i <=n)
 {
 sum += i;

 i++;
 }

 return sum;
}
else // base case
{
 return 0;
}
}
int main()
{
int n = 0;
cout << "Enter a positive integer: ";
cin >> n;
cout << sum(n);
}