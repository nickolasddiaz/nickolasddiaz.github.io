#include <iostream>
using namespace std;
void split(string s, char c)
{
s = s + " ";
string * words = new string[1024];
int k = 0;
string word = "";
for (int i=0; i<s.size(); i++)
{
 if (s[i] == c)
 {
 words[k] = word;
 word = "";
 k++;
 }
 else
 {
 word = word + s[i];
 }
}
for (int i=0; i<k; i++)
{
 cout << "(" << words[i] << ") ";
}
}
int main()
{
string s = "There is beautiful scenery and hospitable people in all corners of Taiwan, from north to south. We are sure you will find something enjoyable on this island!";
split(s, ' ');
}
