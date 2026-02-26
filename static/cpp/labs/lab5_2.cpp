#include <iostream>
using namespace std;
struct node
{
int data;
node* next;
node(int d)
{
 data = d;
 next = NULL;
}
};
void showList(node * n)
{
while (n != NULL)
{
 cout << n->data << " ";
 n = n->next;
}
}
int main()
{
//create nodes
node* head = new node(2);
node* n1 = new node(5);
node* n2 = new node(8);
node* n3 = new node(11);
node* tail = new node(16);
//updates "next" variables
head->next = n1;
n1->next = n2;
n2->next = n3;
n3->next = tail;
showList(head);
return 0;
};