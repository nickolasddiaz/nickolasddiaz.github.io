#include <iostream>
using namespace std;
void reverse1(int n) //for
{
for (int i = n; i>0; i = i/10)
{
 cout << (i % 10);
}
cout << endl;
}
void reverse2(int n) //while
{
while (n>0)
{
 cout << (n % 10);
 n = n/10;
}
cout << endl;
}
void reverse3(int n) //do..while
{
do
{
 cout << (n % 10);
 n = n/10;
} while (n>0);
cout << endl;
}
int main()
{
int x = 536874821;
cout << "Original: " << x << "\nReverse: ";
reverse1(x);
reverse2(x);
reverse3(x);
return 0;
}
