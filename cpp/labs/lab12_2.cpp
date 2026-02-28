#include <iostream>
using namespace std;
struct node
{
int data;
node* left;
node* right;
};
node *root = new node;
void addNode(node* parent, int d)
{
node* temp = new node;
temp->data = d;
temp->left = NULL;
temp->right = NULL;
if (parent == NULL)
{
 root = temp;
}
else
{
 if (parent->left == NULL) { parent->left = temp; }
 else if (parent->left != NULL && parent->left->data > d)
 {
 parent->right = parent->left; //move left to right
 parent->left = temp; //add the new left
 }
 else { parent->right = temp; }
}
}
void showPreorder(node* node)
{
if (node == NULL)
{
 return;
}
else
{
 cout << node->data << " "; //show data of node

 showPreorder(node->left); //then recur on left sutree

 showPreorder(node->right); //recur on right subtree
}
} 
void showInorder(node* node)
{
if (node == NULL)
{
 return;
}
else
{
 showInorder(node->left); //recur on left child

 cout << node->data << " "; //show data of node

 showInorder(node->right); //recur on right child
}
}
void showPostorder(node* node)
{
if (node == NULL)
{
 return;
}
else
{
 showPostorder(node->left); //recur on left subtree

 showPostorder(node->right); //recur on right subtree

 cout << node->data << " "; //show data of node
}
}

int main()
{
addNode(NULL, 6); //update root
addNode(root, 2);
addNode(root->left, 1);
addNode(root->left, 4);
addNode(root, 10);
addNode(root->right, 7);
addNode(root->right, 14);
cout << "Pre-order: " << endl;
showPreorder(root);
cout << endl << "In-order: " << endl;
showInorder(root);
cout << endl << "Post-order: " << endl;
showPostorder(root);
return 0;
}
