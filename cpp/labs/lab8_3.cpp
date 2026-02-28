#include <iostream>
#include <cmath>
using namespace std;
int main()
{
int base;
string s;
cout << "Enter the base: ";
cin >> base;
cout << "Enter the integer: ";
cin >> s;
int equ = 0; //variable for equivalent
int i = s.size()-1;
do
{
 equ = equ + ((int) s[i]-48) * pow(base, (s.size()-1)-i);
 i--;
} while (i >= 0);
cout << equ;
return 0;
}
