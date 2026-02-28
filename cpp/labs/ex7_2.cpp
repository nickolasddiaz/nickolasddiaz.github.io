/*
* Filename: ex7_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std; 

struct production{
int pid;
char QC;
string serialNo;
production* next;
};
production* head = NULL;
production* rear = NULL;

void addProduct(int pids, char QCs, string serialNOs){
production* newNode = new production();
newNode->pid = pids;
newNode->QC = QCs;
newNode->serialNo = serialNOs;
newNode->next = nullptr;
if (head == NULL){
head = newNode;
rear = newNode;}
else{
rear->next = newNode;
rear = newNode;
}}

void showQCPassed(){
production* current = head;
while (current != NULL) {
if (current->QC == 'Y') {
cout << current->pid << "\t" <<current->serialNo << endl;
}
current = current->next;
}}

int main(){
addProduct(1, 'Y', "H203701");
addProduct(2, 'Y', "H203702");
addProduct(3, 'Y', "H203703");
addProduct(4, 'Y', "H203704");
addProduct(5, 'N', "H203705");
addProduct(6, 'Y', "H203706");
addProduct(7, 'Y', "H203707");

showQCPassed();

return 0;
}