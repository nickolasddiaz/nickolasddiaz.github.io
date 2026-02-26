/*
* Filename: ex11_1.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;
#include <string>

#define SIZE 10



int main() {
string words[SIZE];    
cout << "Enter 10 words:\n";
for (int i = 0; i < SIZE; ++i) {
getline(std::cin, words[i]);
}

int result;
string temp;
for (int i=0; i<SIZE-1; i++){
for (int j=0; j<SIZE-1; j++){
result = words[j].compare(words[j+1]);
if (result > 0)  {
temp = words[j];
words[j] = words[j+1];
words[j+1] = temp;
}}} 

cout << "In alphabetical order:\n";
for (int i = 0; i < SIZE; ++i) {
cout << words[i] << "\n";
};
return 0;
}