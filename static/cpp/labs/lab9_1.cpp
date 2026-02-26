#include <iostream>
using namespace std;
long exp(int n, int pow)
{
if (pow == 0) //base
{
 return 1; //recursion
}
else
{
 return n * exp(n, pow-1) ;
}
}
int main()
{
cout << exp(3, 2);
return 0;
}
