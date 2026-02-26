/*
* Filename: ex11_2.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

void selectionSort(char x[], int size){
char temp;
for(int i=0; i<size; i++){
for(int j=i+1; j<size; j++){
if(x[i] > x[j]){
temp = x[i];
x[i] = x[j];
x[j] = temp;
}}}
}

void showArray(char x[], int size){
for (int i=0; i<size; i++){
cout << x[i] << " ";
}
}

int main(){
char x[] = { 'f', 'l', 'o', 'w', 'e', 'r', 's' };
cout << "Before Sorting:\n";
showArray(x, 7);
selectionSort(x, 7);
cout << "\n\nAfter Sorting:\n";
showArray(x, 7);
return 0;
}
