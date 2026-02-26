#include <iostream>
#include <vector>
using namespace std;
int main()
{
vector<int> v (10);
for (int i=0; i<v.size(); i++)
{
 v.at(i) = i + 1;
 cout << v[i] << " ";
}
cout << endl;

v.erase(v.begin() + 5); //remove the 6th element
for (int i=0; i<v.size(); i++)
{
 cout << v[i] << " ";
}
cout << endl;
v.erase(v.end()-1); //remove the last element
for (int i=0; i<v.size(); i++)
{
 cout << v[i] << " ";
}
cout << endl;
v.erase(v.begin(),v.begin()+3); //remove the first 3 elements
for (int i=0; i<v.size(); i++)
{
 cout << v[i] << " ";
}
cout << endl;

v.clear();
for (int i=0; i<v.size(); i++)
{
 cout << v[i] << " ";
}
cout << v.size() << endl;
cout << v.empty() << endl;
return 0;
}
