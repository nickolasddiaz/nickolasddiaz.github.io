/*
* Filename: ex10_2.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;
struct node
{
string data;
node* next;
};
node* head = NULL;
node* tail = NULL;
void addNode(string s)
{
node *temp = new node;
temp->data = s;
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

void searchByKeyword(){
cout << "Enter a keyword:\t";
string word;
cin >> word;
showList();
int i = 0;
bool test = true;
node *temp = head;
while (temp != NULL)
{
i++;
 if(temp->data ==word){
 cout << temp->data << " is found at the position of "<< i << endl;
 test = false;}
 temp = temp->next;
}

if (test)
cout << word << " is not found\n";
}


int main()
{
string words[] = { "Such", "was", "the", "account", "success", "that", "Koval",
"has", "now", "published", "a", "book", "containing", "200", "of", "his",
"favorite", "images", "As", "much", "a", "travel", "guide", "as", "a", "show",
"of", "photography", "the", "submissions", "are", "divided", "by", "geographical",
"region", "and", "span", "the", "farthest", "corners", "of", "the", "Earth"};
int size = sizeof(words) / sizeof(words[0]);
for (int i=0; i<size; i++)
{
 addNode(words[i]);
}
searchByKeyword();
return 0;
}
