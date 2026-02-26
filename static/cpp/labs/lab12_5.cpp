#include <iostream>
using namespace std;
struct node
{
int value;
node *left;
node *right;
};
class binaryTree
{
public:
void insert(int key)
{
 if(root != NULL)
 {
 insert(key, root);
 }
 else
 {
 root = new node;
 root->value = key;
 root->left = NULL;
 root->right = NULL;
 }
}

node *search(int key)
{
 return search(key, root);
}
void destroyTree()
{
 destroyTree(root);
}

void shwInorder()
{
 shwInorder(root);
 cout << "\n";
}

void showPostorder()
{
 showPostorder(root);
 cout << "\n";
}

void showPreorder()
{
 showPreorder(root);
 cout << "\n";
}
private:
void destroyTree(node *leaf)
{
 if(leaf != NULL)
 {
 destroyTree(leaf->left);
 destroyTree(leaf->right);
 delete leaf;
 }
}
void insert(int key, node *leaf)
{
 if(key < leaf->value)
 {
 if(leaf->left != NULL)
 {
 insert(key, leaf->left);
 }
 else
 {
 leaf->left = new node;
 leaf->left->value = key;
 leaf->left->left = NULL;
 leaf->left->right = NULL;
 }
 }
 else if (key >= leaf->value)
 {
 if(leaf->right != NULL)
 {
 insert(key, leaf->right);
 }
 else
 {
 leaf->right = new node;
 leaf->right->value = key;
 leaf->right->right = NULL;
 leaf->right->left = NULL;
 }
 }
}
node *search(int key, node *leaf)
{
 if(leaf != NULL)
 {
 if(key == leaf->value)
 {
 return leaf;
 }
 if(key < leaf->value)
 {
 return search(key, leaf->left);
 }
 else
 {
 return search(key, leaf->right);
 }
 }
 else
 {
 return NULL;
 }
}

void shwInorder(node *leaf)
{
 if(leaf != NULL)
 {
 shwInorder(leaf->left);
 cout << leaf->value << " ";
 shwInorder(leaf->right);
 }
}

void showPostorder(node *leaf)
{
 if(leaf != NULL)
 {
 shwInorder(leaf->left);
 shwInorder(leaf->right);
 cout << leaf->value << " ";
 }
}
void showPreorder(node *leaf)
{
 if(leaf != NULL)
 {
 cout << leaf->value << " ";
 shwInorder(leaf->left);
 shwInorder(leaf->right);
 }
}
node *root;
public:
binaryTree() //constructor
{
 root = NULL;
}
~binaryTree() //destructro
{
 destroyTree();
}
};
int main()
{
binaryTree *tree = new binaryTree();
tree->insert(10);
tree->insert(6);
tree->insert(-15);
tree->insert(14);
tree->insert(5);
tree->insert(-9);
tree->insert(8);
tree->insert(11);
tree->insert(-24);
tree->insert(18);
tree->showPreorder();
tree->shwInorder();
tree->showPostorder();
delete tree;
}