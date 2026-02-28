#include <iostream>
using namespace std;
void permutation(char c[])
{
cout << c[0] << c[1] << c[2] << c[3] << " ";
cout << c[0] << c[1] << c[3] << c[2] << " ";
cout << c[0] << c[2] << c[1] << c[3] << " ";
cout << c[0] << c[2] << c[3] << c[1] << " ";
cout << c[0] << c[3] << c[1] << c[2] << " ";
cout << c[0] << c[3] << c[2] << c[1] << endl;
}
void anagram(char c[], int n)
{
if (n == 0)
{
 permutation(c);
}
else
{
 char temp = c[0];
 c[0] = c[n];
 c[n] = temp;

 permutation(c);

 anagram(c, n-1);
}
}
int main()
{
char c[] = {'a', 'e', 's', 't'};
int n = sizeof(c)/sizeof(c[0]);

anagram(c, n-1);
return 0;
}
