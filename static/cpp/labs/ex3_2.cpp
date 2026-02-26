/*
* Filename: ex3_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
#define PI 3.1415926
#define Volume(r) 4/3/PI*r*r*r


int main(){
cout << "r\tV";
cout << "\n15\t" << Volume(15);
cout << "\n15.1\t" << Volume(15.1);
cout << "\n15.4\t" << Volume(15.4);


return 0;
}