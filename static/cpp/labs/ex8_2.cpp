/*
* Filename: ex8_2.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

float pow(float num,int power){
if (power == 0)
return 1;
float result = num;
for(int i = 0; i<power-1; i++){
result *= num;
}
return result;
}

int main(){
float capital;
float APR;
int age;
cout << "Enter the capital, APR, and age: ";
cin >> capital >> APR >> age;
APR = APR / 100;
int finalage = 67 - age;
int showage = age;
age = 0;
do {
cout << showage << "\t" <<capital * pow(1+APR,age) << "\n";
age++;
showage++;
}while(age <= finalage);



return 0;
}