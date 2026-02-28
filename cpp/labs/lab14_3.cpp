#include <iostream>
#define size 13
using namespace std;
class HashTable
{
public:
 int k;
 int v;
 HashTable(int k, int v)
 {
 this->k = k;
 this->v = v;
 }
};
class Hash
{
private:
 HashTable **hashtable;
public:
 Hash()
 {
 hashtable = new HashTable * [size];
 for (int i = 0; i< size; i++)
 {
 hashtable[i] = NULL;
 }
 }
 int HashFunction(int v)
 {
 return v % size;
 }
 void Insert(int v)
 {
 int k = HashFunction(v);

 int h = HashFunction(k);
 while (hashtable[h] != NULL && hashtable[h]->k != k)
 {
 h = HashFunction(h + 1);
 }
 if (hashtable[h] != NULL)
 {
 delete hashtable[h];
 }
 hashtable[h] = new HashTable(k, v);
 }
 void SearchKey(int k)
 {
 int h = HashFunction(k);
 while (hashtable[h] != NULL && hashtable[h]->k != k)
 {
 h = HashFunction(h + 1);
 }
if (hashtable[h] == NULL)
 {
 cout << "No element found at key: " << k << endl;
 }
 else
 {
 cout << "Element at key " << k <<": " << hashtable[h]->v << endl;
 }
 }
 void RemoveKey(int k)
 {
 int h = HashFunction(k);
 while (hashtable[h] != NULL)
 {
 if (hashtable[h]->k == k)
 {
 break;
 }
 h = HashFunction(h + 1);
 }
 if (hashtable[h] == NULL)
 {
 cout << "Key " << k << " not found." << k << endl;
 }
 else
 {
 hashtable[h] = NULL;
 cout << "Key " << k << " deleted." << endl;
 }
 }
 ~Hash()
 {
 for (int i = 0; i < size; i++)
 {
 if (hashtable[i] != NULL)
 {
 delete hashtable[i];
 delete[] hashtable;
 }
 }
 }
};
int main()
{
int x[size] = { 85, 91, 66, 96, 80, 88, 95,
 87, 84, 77, 63, 93, 82 };
Hash* h1 = new Hash();
for (int i=0; i<size; i++)
{
 h1->Insert(x[i]);
}
h1->RemoveKey(0);
h1->SearchKey(1);
h1->SearchKey(2);
h1->SearchKey(5);
h1->SearchKey(6);
h1->SearchKey(0);
h1->SearchKey(4);
return 0;
}
