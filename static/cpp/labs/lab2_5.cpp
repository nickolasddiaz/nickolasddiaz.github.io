#include<iostream>
#include <ctime>
using namespace std;
char p1, p2;
char getLetter(int i)
{
srand(((int) time(0)) * i);
switch (rand() % 3)
{
 case 0: return 'R'; break;
 case 1: return 'P'; break;
 case 2: return 'S'; break;
}
}
string playGame(int i)
{
//char p1, p2;
p1 = getLetter(i);
p2 = getLetter(i*i+1);
string s = "";
s = s + p1 + " " + p2 + " ";
if (p1 == 'R' && p2 == 'R') { s = s + "Tie"; }
else if (p1 == 'R' && p2 == 'P') { s = s + "Player 2"; }
else if (p1 == 'R' && p2 == 'S') { s = s + "Player 1"; }
else if (p1 == 'P' && p2 == 'R') { s = s + "Player 1"; }
else if (p1 == 'P' && p2 == 'P') { s = s + "Tie"; }
else if (p1 == 'P' && p2 == 'S') { s = s + "Player 2"; }
else if (p1 == 'S' && p2 == 'R') { s = s + "Player 2"; }
else if (p1 == 'S' && p2 == 'P') { s = s + "Player 1"; }
else { s = s + "Tie"; }
return s;
}

int main()
{
//char p1, p2;
for (int i=0; i<100; i++)
{
 cout << playGame(i) << endl;
}
return 0;
}
