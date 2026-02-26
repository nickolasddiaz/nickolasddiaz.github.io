/*
* Filename: ex9_1.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

void recursion(int num, int temp = 3) {
bool prime = true;
if (temp > 2) {
for (int i = 2; i * i <= temp; i++) {
if (temp % i == 0) {
prime = false;
break;
}}}
if (prime && temp > 1) 
 //printing 1
cout << temp << ' ';
temp += 2;
if (temp < num)
recursion(num, temp);
}

int main() {
cout << "Enter a positive integer:\t";
int num;
cin >> num;
cout << "Prime numbers no larger than " << num << ':' << endl;
recursion(num);
return 0;
}