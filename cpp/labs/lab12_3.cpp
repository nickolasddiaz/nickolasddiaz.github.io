#include <iostream>
using namespace std;
struct bstnode
{
int data;
bstnode *left;
bstnode *right;
};
//default beginning node
bstnode *root = NULL;
bstnode* insert(bstnode* node, int n) // insert a new
{
if (node == NULL)//tree is empty
{
 bstnode *temp = new bstnode();
 temp->data = n;
 temp->left = NULL;
 temp->right = NULL;
 return temp; //return a new node
}

else //find the proper place to insert new node
{
 if (n < node->data)
 {
 node->left = insert(node->left, n);
 }
 else
 {
 node->right = insert(node->right, n);
 }
 return node; //return the node pointer
}
}
void showPreorder(bstnode *node) //Preorder traversal
{
if (node != NULL)
{
 cout << node->data << " ";
 showPreorder(node->left);
 showPreorder(node->right);
}
} 
void showInorder(bstnode *node) //Inorder traversal
{
if (node != NULL)
{
 showInorder(node->left);
 cout << node->data << " ";
 showInorder(node->right);
}
}
void showPostorder(bstnode *node) //Postorder traversal
{
if (node != NULL)
{
 showPostorder(node->left);
 showPostorder(node->right);
 cout << node->data << " ";
}
}
bstnode * findMin(bstnode* node) //find node with minimum value
{
bstnode* temp = node;

//search the leftmost tree
while (temp && temp->left != NULL)
{
 temp = temp->left;
}

return temp;
}
bstnode * findMax(bstnode* node) //find node with minimum value
{
bstnode* temp = node;

//search the leftmost tree
while (temp && temp->right != NULL)
{
 temp = temp->right;
}

return temp;
}
int main()
{
root = insert(root, 8); //update root
root->left = insert(root->left, 2);
root->right = insert(root->right, 10);
root->left->left = insert(root->left->left, 1);
root->left->right = insert(root->left->right, 4);
root->right->left = insert(root->right->left, 9);
root->right->right = insert(root->right->right, 11);
root->left->right->left = insert(root->left->right->left, 3);
root->left->right->right = insert(root->left->right->right, 6);
root->left->right->right->left = insert(root->left->right->right->left, 5);
root->left->right->right->right = insert(root->left->right->right->right, 7);
bstnode *min = findMin(root);
cout << "Min: " << min->data << endl;
bstnode *max = findMax(root);
cout << "Max: " << max->data << endl;
cout << "Pre-order: " << endl;
showPreorder(root);
cout << endl << "In-order: " << endl;
showInorder(root);
cout << endl << "Post-order: " << endl;
showPostorder(root);
return 0;
}