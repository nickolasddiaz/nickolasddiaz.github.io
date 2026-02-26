#include <iostream>
using namespace std;
template <class T>
struct node
{
T data;
node* next;
};
template <class T>
node<T>* addNode(T d, node<T>* n)
{
node<T>* temp = new node<T>;
temp->data = d;
temp->next = NULL;

if (n != NULL)
{
 n->next = temp;
}
return temp;
}
template <class T>
void showList(node<T>* temp)
{
while (temp != NULL)
{
 cout << temp->data << " ";
 temp = temp->next;
}
cout << endl;
}
int main()
{
//int
node<int>* i0 = addNode<int>(0, NULL);
node<int>* i1 = addNode<int>(15, i0);
node<int>* i2 = addNode<int>(8, i1);
node<int>* i3 = addNode<int>(24, i2);
node<int>* i4 = addNode<int>(19, i3);

showList(i0);
//double
node<double>* d0 = addNode<double>(0.0, NULL);
node<double>* d1 = addNode<double>(4.25, d0);
node<double>* d2 = addNode<double>(6.39, d1);
node<double>* d3 = addNode<double>(18.24, d2);
node<double>* d4 = addNode<double>(11.07, d3);

showList(d0);
//string
node<string>* s0 = addNode<string>("None", NULL);
node<string>* s1 = addNode<string>("apple", s0);
node<string>* s2 = addNode<string>("cherry", s1);
node<string>* s3 = addNode<string>("grape", s2);
node<string>* s4 = addNode<string>("banana", s3);

showList(s0);
//char
node<char>* c0 = addNode<char>(' ', NULL);
node<char>* c1 = addNode<char>('R', c0);
node<char>* c2 = addNode<char>('A', c1);
node<char>* c3 = addNode<char>('T', c2);
node<char>* c4 = addNode<char>('E', c3);
showList(c0);

return 0;
}