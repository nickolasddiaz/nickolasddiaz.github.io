//List all prime numbers up to 100.
#include <iostream>
using namespace std;
void IsPrime(int n)
{
int count = 0;
if (n <= 2)
{
 cout << n << " ";
}
else
{
 for (int i = 1; i<=n; i++)
 {
 if (n % i == 0) { count++; }
 if (count > 2) { break; }
 }

 if (count <= 2) { cout << n << " "; }

 IsPrime(n-1);
}
}
int main()
{
IsPrime(99);
return 0;
}