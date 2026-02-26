#include <iostream>
using namespace std;
struct node
{
int data;
int *pt;
};
void showList(node n[])
{
int i=0;
cout << n[i].data << " "; //n[0] is not pointed

while (n[i].pt != NULL)
{
 cout << *n[i].pt << " "; //value pointed by n[i].pt
 i++;
}
}
int main()
{
node n[5];
n[0] = { 2, NULL };
n[1] = { 5, NULL };
n[2] = { 8, NULL };
n[3] = { 11, NULL };
n[4] = { 16, NULL };
int size = sizeof(n)/sizeof(n[0]);
int i=0;
while (i < size-1)
{
 n[i].pt = &n[i+1].data; //update the pointer
 i++;
}
showList(n);
return 0;
}