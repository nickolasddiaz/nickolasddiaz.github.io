#include <iostream>
#include <typeinfo>
using namespace std;
string checkType(string s)
{
if (s == "class std::basic_string<char,struct std::char_traits<char>,classstd::allocator<char> >")
{
 return "string";
}
else
{
 return s;
}
}
template <class T>
T* createArray(int SIZE)
{
T *x = new T[SIZE];
int i = 0;
while (i<SIZE)
{
 cout << "Enter a " << checkType(typeid(T).name())
 << " value for [" << i << "]: ";
 cin >> x[i];
 i++;
}
return x;
}
template <class T>
void createArray(T* arr, int SIZE)
{
for (int i=0; i<SIZE; i++)
{
 cout << arr[i] << " ";
}
cout << endl;
}
int main()
{
system("cls");
string* arr1 = createArray<string>(3);
createArray(arr1, 3);
int* arr2 = createArray<int>(5);
createArray(arr2, 5);
char* arr3 = createArray<char>(4);
createArray(arr3, 4);
return 0;
}
