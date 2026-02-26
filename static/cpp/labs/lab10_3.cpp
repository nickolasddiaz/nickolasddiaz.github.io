#include <iostream>
using namespace std;
struct node
{
int data;
node* next;
};
node* head = NULL;
node* tail = NULL;
void addNode(int n)
{
node *temp = new node;
temp->data = n;
temp->next = NULL;
if (head == NULL)
{
 head = temp;
 tail = temp;
}
else
{
 tail->next = temp;
 tail = tail->next;
}
}
void showList()
{
node *temp = head;
while (temp != NULL)
{
 cout << temp->data << " ";
 temp = temp->next;
}
cout << endl;
}
bool linearSearch(int n)
{
bool isFound = false;
node *temp = head;
while (temp != NULL)
{
 if (temp->data == n)
 {
 isFound = true;

 break;
 }
 temp = temp->next;
}
return isFound;
}
//recursive version
bool linearSearch(node *temp, int n)
{
if (temp == NULL)
{
 return false;
}
if (temp->data == n)
{
 return true;
}
return linearSearch(temp->next, n);
}
int main()
{
addNode(12);
addNode(5);
addNode(18);
addNode(7);
addNode(10);
addNode(11);
addNode(9);
addNode(16);
addNode(14);
showList();
cout << linearSearch(11) << endl;
cout << linearSearch(21) << endl;
return 0;
};