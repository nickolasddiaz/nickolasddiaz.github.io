/*
* Filename: ex12_1.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;
struct node{
char data;
node* left;
node* right;
};

node *root = new node;
void addNode(node* parent, char d){
node* temp = new node;
temp->data = d;
temp->left = NULL;
temp->right = NULL;
if (parent == NULL){
 root = temp;
}
else{
 if (parent->left == NULL) { parent->left = temp; }
 else if (parent->left != NULL && parent->left->data > d){
 parent->right = parent->left; 
 parent->left = temp; }
 else { parent->right = temp; }
}
}
void showPreorder(node* node){
if (node == NULL){
 return;
}
else{
 cout << node->data << " "; 

 showPreorder(node->left); 

 showPreorder(node->right);
}
} 
void showInorder(node* node){
if (node == NULL)
{
 return;
}
else{
 showInorder(node->left); 
 cout << node->data << " "; 
 showInorder(node->right); }
}
void showPostorder(node* node){
if (node == NULL){
 return;
}
else{
showPostorder(node->left); 
showPostorder(node->right);  
cout << node->data << " "; 
}
}

int main(){
addNode(NULL, 'N'); 
addNode(root, 'C');
addNode(root->left, 'B');
addNode(root->left, 'D');
addNode(root, 'Y');
addNode(root->right, 'R');


cout << "In-order: " << endl;
showInorder(root);


return 0;
}
