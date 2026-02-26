/*
* Filename: ex12_2.cpp
* Programmer: Nickolas Diaz
*/

BSTNode* newBSTNode(char data) {
    BSTNode* node = new BSTNode();
    node->data = data;
    node->left = node->right = nullptr;
    return node;
}

void printList() {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}

int main() {
    BSTNode* root = newBSTNode('N');
    root->left = newBSTNode('C');
    root->right = newBSTNode('R');

    cout << "Traversing BST and building Linked List..." << endl;
    inOrder(root);

    cout << "Resulting Linked List: ";
    printList();

    return 0;
}