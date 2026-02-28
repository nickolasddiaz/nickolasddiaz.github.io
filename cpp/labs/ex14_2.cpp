/*
* Filename: ex14_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
struct Dictionary
{
string key;
string value;
Dictionary * next;
};
Dictionary *head = NULL;
Dictionary *tail = NULL;
void insert(string key, string value)
{
Dictionary *temp = new Dictionary;
temp->key = key;
temp->value = value;
temp->next = NULL;
if(head==NULL)
{
 head = temp;
 tail = temp;
 temp = NULL;
}
else
{
 tail->next = temp;
 tail = temp;
}
}
string getValue(string k)
{
Dictionary *temp = new Dictionary;
temp->key = k;
temp = head;
while (temp != NULL)
{
 if (temp->key == k)
 {
 return temp->value;
 }
 else
 {
 temp = temp->next;
 }
}
}
int main()
{
insert("CA", "California");
insert("MI", "Michigan");
insert("TX", "Texas");
insert("OH", "Ohio");
insert("IL", "Illinois");
string k;
cout << "Enter a valid key: ";
cin >> k;
cout << getValue(k) << endl;
return 0;
}
