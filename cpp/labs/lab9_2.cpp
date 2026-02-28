/*Find 0 + 2 + 4 + ... + n with n being an even integer
 Find 1 + 3 + 5 + ... + n with n being an odd integer*/
#include <iostream>
using namespace std;
long sumEvens(int n)
{
if (n == 0)
{
 cout << "0=";

 return 0;
}
else
{
 cout << n << "+";
 return n + sumEvens(n-2);
}
}
long sumOdds(int n)
{
if (n == 1)
{
 cout << "1=";

 return 1;
}
else
{
 cout << n << "+";
 return n + sumOdds(n-2);
}
}
int main()
{
int n1, n2;
cout << "Enter an even integer: ";
cin >> n1;
cout << "Enter an odd integer: ";
cin >> n2;
cout << sumEvens(n1) << endl;
cout << sumOdds(n2) << endl;
return 0;
}
