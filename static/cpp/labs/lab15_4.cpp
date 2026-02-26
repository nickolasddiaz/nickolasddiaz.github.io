#include <iostream>
using namespace std;
template <typename K, typename V>
class Array
{
public:
 K *key; //pointer of K type
 V *val; //pointer of V type
 int index, SIZE;
 Array() //default constructor
 {
 key = new K[2]; //array of K type
 val = new V[2]; //array of V type
 };

 Array(int size) //parameterized constructor
 {
 key = new K[size]; //array of K type
 val = new V[size]; //array of V type
 }
 void Add(int i, K k, V v)
 {
 key[i] = k;
 val[i] = v;
 }
 V Get(K k) // function of V type
 {
 for (int i = 0; i<SIZE; i++)
 {
 if (key[i] == k)
 {
 index = i;
 break;
 }
 }

 return val[index];
 }
};
int main()
{
Array<string, string>* a1 = new Array<string, string>(5);
a1->Add(0, "CA", "California");
a1->Add(1, "OH", "Ohio");
a1->Add(2, "MI", "Michigan");
a1->Add(3, "TX", "Texas");
a1->Add(4, "IL", "Illinois");

cout << a1->Get("IL") << " ";
cout << a1->Get("CA") << " ";
cout << a1->Get("TX") << " ";
cout << a1->Get("OH") << " ";
cout << a1->Get("MI") << endl;
Array<char, double> a2 = Array<char, double>(3);
a2.Add(0, 'F', 16.5);
a2.Add(1, 'G', 37.2);
a2.Add(2, 'H', 20.9);
cout << a2.Get('F') << " ";
cout << a2.Get('G') << " ";
cout << a2.Get('H') << endl;
Array<float, bool> a3;
a3.Add(0, 1.1, true);
a3.Add(1, 1.2, false);
cout << a3.Get(1.1) << " ";
cout << a3.Get(1.2) << endl;
return 0;
}