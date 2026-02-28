/*
* Filename: ex2_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;

double Factorization(double x, double y){ 
return((x+y)*(x*x-x*y+y*y));
}

int main(){
double x, y;
cout << "Enter a value for x: ";
cin >> x;
cout <<"Enter a value for y: ";
cin >> y;
cout << "\n" << Factorization(x,y);


return 0;
}
