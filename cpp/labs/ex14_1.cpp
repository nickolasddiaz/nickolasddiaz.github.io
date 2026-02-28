/*
* Filename: ex14_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
int x[] = { 42, 23, 34, 57, 46, 38, 12 };
int SIZE = sizeof(x) / sizeof(x[0]);
int *keys = new int[SIZE]; //array to store keys

void getHash(int key){
keys[key] = x[key];
}

void getValue(int key){
getHash(key);
cout << x[key] << "\t" << key<< "\t" << keys[key] << endl;
}


int main(){
cout << "x[i]\tkey\tObtainedValue" << endl;
for(int i = 0; i < SIZE; i++){
getValue(i);
}
return 0;
}
