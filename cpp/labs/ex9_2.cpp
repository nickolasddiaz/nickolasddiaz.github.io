/*
* Filename: ex9_2.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;
struct node{
int cid;
string city;
node* next;
};

node *bottom = NULL;
node *top = NULL;

void addCity(int i, string s){
node *temp = new node;
temp->cid = i;
temp->city = s;
temp->next = top;
top = temp;
}

void showCity(){
node *temp = top;
while (temp != NULL)
{
 cout << temp->cid << " " << temp->city << endl;
 temp = temp->next;
}
}

node* reverse(node* temp)
{
    if (temp == NULL || temp->next == NULL)
        return temp;

    node* rest = reverse(temp->next);
    temp->next->next = temp;
    temp->next = NULL;
    return rest;
}

void reverseStack()
{
    top = reverse(top);
}


int main()
{
string city[10] = { "Seattle", "Boston", "New York", "Chicago",
 "Atlanta", "Houston", "Los Angeles", "Miami",
"Pittsburgh", "Portland" };
for (int i=0; i<10; i++)
{
 addCity(i, city[i]);
}
cout << "before" << endl;
showCity();
reverseStack();
cout << "after" << endl;
showCity();

return 0;
}
