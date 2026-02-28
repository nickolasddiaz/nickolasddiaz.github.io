/*
* Filename: ex15_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;

template <typename T1, typename T2>
void combine(T1 x, T2 y) {
cout << x << y << endl;
}

int main() {
combine<string, int>("apple", 1);
combine<string, double>("apple", 12.3);
combine<string, char>("apple", 'S');
combine<string, bool>("apple", true);
combine<int, double>(78, 12.3);
combine<double, double>(78.419, 12.3);

return 0;
}