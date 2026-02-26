/*
* Filename: ex6_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;

struct node {
    int seq;
    string serialNo;
    node* next;
};

node* top = NULL;

void showFILO() {
node* temp = top;
if (temp == NULL) {
cout << "stack is empty..." << endl;
} else {
cout << "Elements are: \n";
 while (temp != NULL) {
 cout << temp->seq << " " << temp->serialNo << "\n";
temp = temp->next;
}
cout << endl;
}
}

void addBox(int n) {
node* temp = new node;
int x = 431850 + n;
 string serial = "T" + to_string(x);
 temp->seq = n;
temp->serialNo = serial;
temp->next = top;
top = temp;
}
int main() {
for (int i = 0; i < 13; i++) {
addBox(i);
}
showFILO();
return 0;
}
