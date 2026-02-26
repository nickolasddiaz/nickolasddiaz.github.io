#include <iostream>
#include <ctime>
using namespace std;
bool Search(int x[], int k, int size)
{
bool IsFound = false;

for (int i=0; i<size; i++)
{
 if (x[i] == k)
 {
 IsFound = true;
 break;
 }
}

return IsFound;
}
void show(int x[], int size)
{
for (int i=0; i<size; i++)
{
 cout << x[i] << " ";
}
cout << endl;
}
int main()
{
srand((int) time(0));
int size = 50;
int* x = new int[size]; //dynamic array

for (int i=0; i<size; i++)
{
 x[i] = rand() % 100 + 1;
}
cout << "Array:\n";
show(x, size);
cout << "\n";
cout << "17:" << Search(x, 17, size) << "\n";
cout << "27:" << Search(x, 27, size) << "\n";
cout << "37:" << Search(x, 37, size) << "\n";
cout << "47:" << Search(x, 47, size) << "\n";
cout << "57:" << Search(x, 57, size) << "\n";
cout << "67:" << Search(x, 67, size) << "\n";
cout << "77:" << Search(x, 77, size) << "\n";
cout << "87:" << Search(x, 87, size) << "\n";
cout << "97:" << Search(x, 97, size) << "\n";
return 0;
}
