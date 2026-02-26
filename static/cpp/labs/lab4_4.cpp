#include <iostream>
using namespace std;
int SIZE = 0;
int *arr = new int[SIZE];
int * insert(int x)
{
int *arr2 = new int[SIZE+1];
for (int i=0; i<SIZE; i++)
{
 arr2[i] = arr[i];
}
arr2[SIZE] = x;
SIZE++;
return arr2;
}
int * remove()
{
int *arr2 = new int[SIZE-1];
for (int i=0; i<SIZE-1; i++)
{
 arr2[i] = arr[i];
}
arr[SIZE-1] = NULL;
SIZE--;
return arr2;
}
void show()
{
for (int i=0; i<SIZE; i++)
{
 cout << arr[i] << " ";
}
cout << endl;
}
int main()
{
arr = insert(11);
show();
arr = insert(12);
show();
arr = insert(13);
show();
arr = insert(14);
show();
arr = insert(15);
show();
//remove
arr = remove();
show();
arr = remove();
show();
arr = remove();
show();
arr = remove();
show();
arr = remove();
show();
return 0;
}
