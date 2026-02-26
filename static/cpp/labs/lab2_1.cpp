#include <iostream>
using namespace std;
bool check(int n, int m)
{
if (n%m == 0)
{
 return true;
}
else
{
 return false;
}
}
int main()
{
for (int i=10; i<=199; i++) // from 10 to 199
{
 if (check(1972, i) == true)
 {
 cout << i << endl;
 }
}
return 0;
}