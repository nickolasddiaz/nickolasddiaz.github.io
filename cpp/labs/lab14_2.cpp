#include <iostream>
#define size 13
using namespace std;
struct node
{
int v;
int k;
node* next;
};
class Hash
{
public:
 node **hashtable;

 Hash()
 {
 hashtable = new node*[size]; //create an empty hashtable

 for (int i = 0; i < size; i++)
 {
 hashtable[i] = NULL;
 }
 }

 ~Hash()
 {
 delete[] hashtable;
 }

 int HashFunction(int value)
 {
 return value%size;
 }

 void insert(int value)
 {
 int key = HashFunction(value);
 node* temp = hashtable[key];

 if (temp == NULL)
 {
 temp = new node;
 temp->v = value;
 temp->k = key;
 temp->next = NULL;
 hashtable[key] = temp;
 }
 else //if values exist
 {
 while (temp != NULL) //iterate till the end of list
 {
 temp = temp->next;
 } 
 //create the new node at end of list
 temp = new node;
 temp->v = value;
 temp->k = key;
 temp->next = NULL;
 }
 cout << "Value is " << value << ", key is " << key << endl;
}

};
int main()
{
int x[size] = { 85, 91, 66, 96, 80, 88, 95,
 87, 84, 77, 63, 93, 82 };
Hash* h1 = new Hash();
for (int i=0; i<size; i++)
{
 h1->insert(x[i]);
}
return 0;
}
