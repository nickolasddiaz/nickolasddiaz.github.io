#include <iostream>
using namespace std;
struct node
{
int data;
node* left;
node* right;
};
node *root = new node;
void showChild(node* n)
{
node *temp = n;
cout << "Left of " << temp->data << ": ";
while(temp->left != NULL)
{
 cout << temp->left->data << " ";
 temp = temp->left;
}
temp = n;
cout << endl;
cout << "Right of " << temp->data << ": ";
while(temp->right != NULL)
{
 cout << temp->right->data << " ";
 temp = temp->right;
}
cout << endl;
}

int main()
{
root->data = 6;
root->left = NULL;
root->right = NULL;
node *c1 = new node;
c1->data = 2;
c1->left = NULL;
c1->right = NULL;
root->left = c1; //update pointer
node *c2 = new node; //a leaf
c2->data = 1;
c2->left = NULL;
c2->right = NULL;
c1->left = c2; //update pointer
node *c3 = new node; //a leaf
c3->data = 4;
c3->left = NULL;
c3->right = NULL;
c1->right = c3; //update pointer
node *c4 = new node;
c4->data = 10;
c4->left = NULL;
c4->right = NULL;
root->right = c4; //update pointer
node *c5 = new node; //a leaf
c5->data = 7;
c5->left = NULL;
c5->right = NULL;
c4->left = c5; //update pointer
node *c6 = new node; //a leaf
c6->data = 14;
c6->left = NULL;
c6->right = NULL;
c4->right = c6; //update pointer
system("cls"); //clear the screen
showChild(root);
showChild(c1);
showChild(c4);
return 0;
}
