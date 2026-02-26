#include <iostream>
using namespace std;
int val[13][13];
int sequence[13];
int setkey(int v, int SIZE)
{
return (v % SIZE);
}
void addElement(int v)
{
int k = setkey(v, 13);
val[k][sequence[k]] = v;
sequence[k] = sequence[k] + 1;
}
void showList(int SIZE)
{
cout << "key\tvalue" << endl;
for (int k=0; k<SIZE; k++) //k - key
{
 for (int s = 0; s<2; s++) //s - sequence
 {
 if (val[k][s] != 0)
 {
 cout << k << "-" << s
 << "\t" << val[k][s] << endl;
 }

 }
}
}
void searchBykey(int k, int s)
{
cout << val[k][s] << endl;
}
int main()
{
//set all elements of sequence array to 0
for (int i=0; i<13; i++)
{
sequence[i] = 0;
}
addElement(85);
addElement(91);
addElement(66);
addElement(96);
addElement(80);
addElement(88);
addElement(95);
addElement(87);
addElement(84);
addElement(77);
addElement(63);
addElement(93);
addElement(82);
showList(13);
searchBykey(0, 0);
searchBykey(1, 0);
searchBykey(2, 0);
searchBykey(2, 1);
searchBykey(4, 0);
searchBykey(4, 1);
return 0;
}