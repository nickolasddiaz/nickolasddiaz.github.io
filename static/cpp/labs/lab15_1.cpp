#include <iostream>
using namespace std;
template <typename T>
T getMin(T n1, T n2)
{
if (n1 < n2)
{
 return n1;
}
else
{
 return n2;
}
}
template <class T>
void Swap(T t1, T t2)
{
T temp = t1;
t1 = t2;
t2 = temp;
cout << t1 << " " << t2 << endl;
}
int main()
{
//getMin
cout << getMin<int>(15, 12) << endl;
cout << getMin<float>(17.1, 19.3) << endl;
cout << getMin<char>('A', 'C') << endl;
//Swap
int i1 = 5, i2 = 3;
Swap<int>(i1, i2); // calls swap using int type
char c1 = 'S', c2 = 'R';
Swap<char>(c1, c2); // calls swap using char type
string s1 = "apple", s2 = "orange";
Swap<string>(s1, s2); // calls swap using string type
double d1 = 3.26, d2 = 7.59;
Swap<double>(d1, d2); // calls swap using double type
bool b1 = true, b2 = false;
Swap<bool>(b1, b2); // calls swap using bool type
return 0;
}
