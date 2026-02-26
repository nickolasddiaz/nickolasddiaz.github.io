#include <iostream>

using namespace std;
#define C(F) ((F-32)*(5.0/9.0))
int main()
{
cout << C(98.7) << endl; //replace F with 98.7
double F;
cout << "Enter a Fahrenheit degree: ";
cin >> F;
cout << C(F) << endl; //replace F with user input
return 0;
}
