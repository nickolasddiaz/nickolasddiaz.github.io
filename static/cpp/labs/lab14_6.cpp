#include <iostream>
#include <string>
using namespace std;
string getHash(string s)
{
//replace blank space with $
for (int i=0; i<s.size(); i++)
{
 if (s[i] == ' ') { s[i] = '$'; }
}
//duplicate s if the length of s is less 64
while (s.size() < 64)
{
 s = s + s;
}
//reverse odd and even characters
char c;
for (int i=1; i<s.size(); i++)
{
 if (i%2 == 0)
 {
 c = s[i-1];
 s[i-1] = s[i];
 s[i] = c;
 }
}
//reverse the entire s string, but keep only last 64 characters
string s1 = "";
for (int i=s.size()-1; i>=s.size()-64; i--)
{
 s1 = s1 + s[i];
}
s = s1; //copy value in s1 to s
s1 = ""; //reset s1 to null
//break the s to 8 8-character segment
string segments[8];
int k = 0;
for (int i=0; i<64; i++)
{
 segments[k] += s[i];
 if (i>0 && i%8==0)
 {
 k++;
 }
}
//reverse every two segments
string temp = "";
for (int i=0; i<8; i+=2)
{
 temp = segments[i];
 segments[i] = segments[i+1];
 segments[i+1] = temp;
}
s = "";
//recombine all segments to form a new s
for (int i=0; i<7; i++)
{
 s = s + segments[i];
}
//let every character go through XOR with 81567
s1 = "";
int n;
for (int i=0; i<64; i++)
{
 n = (((int) s[i])^81567)%128;
 if (n<48) { n = n%10 + 48; }
 if (n>57 && n<65) { n = n%26 + 65; }
 if (n>90 && n<97) { n = n%26 + 97; }
 if (n>122)
 {
 switch(n%3)
 {
 case 0: n = n%10 + 48; break;
 case 1: n = n%26 + 65; break;
 case 2: n = n%26 + 97; break;
 }
 }

 s1 = s1 + char(n);
}
return s1;
}
int main()
{
string birthday, nickname, amount;
cout << "Enter your birthday: ";
getline(cin, birthday);
cout << "Enter your nick name: ";
getline(cin, nickname);
cout << "Enter the amount: ";
getline(cin, amount);
string s = birthday + nickname + amount;
cout << getHash(s) << endl;
return 0;
}
