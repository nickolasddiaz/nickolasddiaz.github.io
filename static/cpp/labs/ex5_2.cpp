/*
* Filename: ex5_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
#include <ctime>
using namespace std;


struct node {
int index;
string fortunecookie;
node* next;
node() {
index = NULL;
fortunecookie = "";
next = NULL;}
};

node* head = new node();

void addnode(int day, string saying){
node *temp = head;
for(int i = 0; i < day; i++){
if(temp->next == NULL){
temp->next = new node();
}
temp = temp->next;
}
temp->index = day;
temp->fortunecookie = saying;
}

void findSaying(int day){
node *temp = new node();
temp = head;
while(temp->index != day){
temp = temp->next;
}
cout << day << "\t" <<temp->fortunecookie;
}

int main()
{
time_t t = time(0);
tm* dt = localtime(&t);
int w = dt->tm_wday; //0-Sun, 1-Mon, 2-Tue, .., 6-Sat
addnode(0, "A faithful friend is a strong defense.");
addnode(1, "Believe in yourself and others will too.");
addnode(2, "Courtesy begins in the home.");
addnode(3, "Disbelief destroys the magic.");
addnode(4, "Every flower blooms in its own sweet time.");
addnode(5, "Failure is the path of lease persistence.");
addnode(6, "Good news will come to you by mail.");
findSaying(w);

}
