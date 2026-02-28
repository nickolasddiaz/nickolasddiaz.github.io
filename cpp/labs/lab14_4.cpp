#include <iostream>
#define size 13
using namespace std;
class HashEntry
{
private:
 int key;
 int value;
public:
 HashEntry(int key, int value)
 {
 this->key = key;

 this->value = value;
 }

 int getKey()
 {
 return key;
 }
 int getValue()
 {
 return value;
 }
};
class HashMap
{
private:
 HashEntry ** table;
public:
 HashMap()
 {
 table = new HashEntry * [size];

 for (int i = 0; i < size; i++)
 {
 table[i] = NULL;
 }
 }
 int get(int key)
 {
 int hash = (key % size);
 while (table[hash] != NULL && table[hash]->getKey() != key)
 {
 hash = (hash + 1) % size;
 }

 if (table[hash] == NULL)
 {
 return -1;
 }
 else
 {
 return table[hash]->getValue();
 }
 }
 void put(int key, int value)
 {
 int hash = (key % size);

 while (table[hash] != NULL && table[hash]->getKey() != key)
 {
 hash = (hash + 1) % size;
 }

 if (table[hash] != NULL)
 {
 delete table[hash];
 }

 table[hash] = new HashEntry(key, value);
 }
~HashMap()
{
 for (int i = 0; i < size; i++)
 {
 if (table[i] != NULL)
 {
 delete table[i];
delete[] table;
 }
 }

}
};
int main()
{
int x[size] = { 85, 91, 66, 96, 80, 88, 95,
 87, 84, 77, 63, 93, 82 };
HashMap h1;
for (int i=0; i<size; i++)
{
 h1.put(i, x[i]);
}
for (int i=0;i<size; i++)
{
cout << i << ": " << h1.get(i) << endl;
}
return 0;
}
