/*
* Filename: ex15_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
template <typename T>
class Arrays{
int SIZE;
T *arr;
public:
Arrays() {}
Arrays(int s) {
SIZE = s;
arr = new T[SIZE];
cout << "Enter " << SIZE << " values: ";
for (int i = 0; i < SIZE; i++)
{
cin >> arr[i];
}
}
void showElements(){
for (int i = 0; i < SIZE; i++){
cout << arr[i] << " ";
}
cout << endl;
}
};

int main(){
Arrays<int> a1(5);
a1.showElements();
Arrays<double> a2(4);
a2.showElements();
Arrays<char> a3(6);
a3.showElements();
Arrays<string> a4(3);
a4.showElements();
return 0;
}