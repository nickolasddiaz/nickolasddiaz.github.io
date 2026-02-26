/*
* Filename: ex1_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;

class Quadratic {
public: 
Quadratic() {cout << "x" << "\t" << "value" << "\n";}
double func(double x) { cout << x; return (a*x*x + b*x + c);} 
private:
int a = 5;
int b = 2;
int c = 7;
};

int main()
{
    	Quadratic obj1; 
    	cout << "\t" << obj1.func(3) << "\n";
    	cout << "\t" << obj1.func(3.14) << "\n";
    	cout << "\t" << obj1.func(-3) << "\n";
    	cout << "\t" << obj1.func(-3.14) << "\n";
}