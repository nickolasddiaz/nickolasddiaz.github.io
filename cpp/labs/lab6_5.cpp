#include <iostream>
#include <vector>
using namespace std;
struct Stack
{
vector<int> v;
void push(int n)
{
 v.push_back(n); //add element
}

void pop()
{
 vector <int> :: reverse_iterator it = v.rbegin();

 if(v.empty())
 {
 cout << "Stack is empty." << endl;
 }
 else
 {
 v.pop_back();
 }
}
void peek()
{
 if(v.empty())
 {
 cout << "Stack is empty." << endl;
 }
 else
 {
 cout << v.back() << endl;
 }

}
bool IsEmpty()
{
 return v.empty();
}

int size()
{
 return v.size();
}
void display()
{
 vector <int> :: reverse_iterator it = v.rbegin();

 if(v.empty())
 {
 cout << "Stack is empty." << endl;
 }
 else
 {
 for(; it != v.rend(); ++it)
 {
 cout << *it << " ";
 }
 cout << endl;
 }
}

};
int main()
{
Stack s1;
s1.push(11);
s1.push(12);
s1.push(13);
s1.push(14);
s1.push(15);
s1.push(16);
s1.peek(); //16
cout << s1.size() << endl; //6
cout << s1.IsEmpty() << endl;//0
s1.display();
s1.pop();
s1.pop();
cout << s1.size() << endl; //4
s1.display();
s1.peek(); //14
return 0;
}
