#include <iostream>
using namespace std;
struct node
{
int data;
node* next;
};
struct edge
{
int start;
int end;
};
class graph
{
public:
 int numberOfNode;
node* addNode(int end, node* head)
{
 node* temp = new node;
 temp->data = end;
 temp->next = head;
 return temp;
}
public:
 node **arrNode;
 graph(edge edges[], int n, int N)
 {
 arrNode = new node*[N];

 this->numberOfNode = N;
 for (int i = 0; i < N; i++)
 {
 arrNode[i] = nullptr;
 }
 for (int i = 0; i < n; i++)
 {
 int start = edges[i].start;
 int end = edges[i].end;
 node* temp = addNode(end, arrNode[start]);
 arrNode[start] = temp;
 }
 }
// Destructor
~graph()
{
 for (int i = 0; i < numberOfNode; i++)
 {
 delete[] arrNode[i];
 }
 delete[] arrNode;
}
};
void showList(node* temp, int i)
{
while (temp != nullptr)
{
 cout << "(" << i << "," << temp->data << ") ";

 temp = temp->next;
}
cout << endl;
}
int main()
{
edge edges[] = { {0, 1}, {0, 3}, {1, 2}, {1, 4}, {2, 3} };
int N = 5;
int size = sizeof(edges)/sizeof(edges[0]);
graph* g1 = new graph(edges, size, N);
for (int i = 0; i < N; i++)
{
 showList(g1->arrNode[i], i);
}
return 0;
}
