#include <iostream>
#include <string>
using namespace std;
struct Contact
{
int index;
string fn;
string ln;
};
int main()
{
Contact c[5];
int i = 0;
string continued = "y";
while (continued == "y")
{
 cout << "Enter first name for record " << (i + 1) << ": ";

 cin >> c[i].fn;
 cout << "Enter last name for record " << (i + 1) << ": ";

 cin >> c[i].ln;

 c[i].index = i;
 i++;

 cout << "Do you want to continue? [y/n]: ";

 cin >> continued;
}
for (int i=0; i<5; i++)
{
 cout << c[i].index << "\t" << c[i].fn << " " << c[i].ln << endl;
}
return 0;
}
