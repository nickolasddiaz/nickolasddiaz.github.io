#include <iostream>
using namespace std;
char *toCharArray(string s)
{
char *c = new char[s.size() + 1];
for (int i=0; i<s.size(); i++)
{
 c[i] = s[i];
}
return c;
}
bool bruteForceSearch(string str, string key)
{
bool IsFound = false;

char *s = toCharArray(str);
char *k = toCharArray(key);

int n = str.size();
int m = key.size();
for (int i=0; i<n-m; i++)
{
 int j=0;
 while(j<m && s[i+j] == k[j])
 {
 j++;
 }

 if (j==m)
 {
 IsFound = true; // i is the position of first occurrence
 break;
 }
}
return IsFound;
}
int main()
{
string str = "The reason for the large disparity is simple. In order to see a total eclipse of the sun, you must be fortuitously positioned along the path of the moon’s dark shadow (the umbra) which might extend for many thousands of miles, but cannot be any wider than 167 miles in diameter. In contrast, the region of visibility for a total lunar eclipse extends to more than half of the Earth allowing billions to partake in the lunar show.";
string key = "miles";
cout << bruteForceSearch(str, key) << endl;
key = "dark";
cout << bruteForceSearch(str, key) << endl;
key = "lunar";
cout << bruteForceSearch(str, key) << endl;
key = "kuma";
cout << bruteForceSearch(str, key) << endl;
}