/*
* Filename: ex8_1.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

int main(){
float viscosity = .000447;
float diameter = 0;
float density 	= 719;

do {
diameter+=.1;
cout << diameter << "\t" << 2000*viscosity/(diameter*density) << "\n";
}while(diameter<= 2.2);

return 0;
}