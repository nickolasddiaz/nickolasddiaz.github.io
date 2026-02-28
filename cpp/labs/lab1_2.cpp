#include <iostream>
#include <cmath>
using namespace std;
int main()
{
double r;
int A, P, n, t;
r = 0.0258; // 2.58%
P = 5000;
n = 12; // 12 months a year
t = 6; // 6 years
A = P * pow((1 + r/n), n*t);
cout << A << endl;
return 0;
}
