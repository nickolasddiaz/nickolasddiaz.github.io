/*
* Filename: ex4_2.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

string* addProductId(string* temp, int size){
string* newarray = new string[size + 1];
for (int i = 0; i < size; i++) {
newarray[i] = temp[i];
}
return newarray;
}


int main(){
int size = 0;
string* products = new string[size];
char x = 'y';
string temp;
while(x =='y'){
cout << "Enter the product ID:";
cin >> temp;
products = addProductId(products, size);
products[size] = temp;
size++;
cout << "Do you want to continue? [y/n]:";
cin >> x;
}
for(int i = 0; i<size; i++){
cout << products[i] << endl;
}

delete[] products;

return 0;
}