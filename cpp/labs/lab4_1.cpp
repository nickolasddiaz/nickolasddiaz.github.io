#include <iostream>
using namespace std;
int *MultiplyBy2(int *ptr)
{
for (int i=0; i<47; i++)
{
 *(ptr + i) = *(ptr + i)*2 ;
}
return ptr;
}
int main()
{
int x[47] = { }; //empty set
int *ptr; // pointer to the array
ptr = x;
for (int i=0; i<47; i++)
{
 x[i] = i + 1;

 cout << x[i] << " ";
}
cout << endl;
ptr = MultiplyBy2(ptr);
for (int i=0; i<47; i++)
{
 cout << x[i] << " ";
}
cout << endl;
return 0;
}
