#include <iostream>
using namespace std;
struct node
{
int data;
int cost;
node* next;
};
struct graph
{
int start;
int end;
int weight;
};
class Diagraph
{
public:
 int numberOfNode;
node* addNode(int end, int weight, node* head)
{
 node* temp = new node;
 temp->data = end;
 temp->cost = weight;

 temp->next = head;

 return temp;
}
public:
node **arrNode;
 //n: numberOfEdge, N: numberOfNode
 Diagraph(graph edges[], int n, int N) //constructor
 {
 arrNode = new node*[N];

 this->numberOfNode = N;

 for (int i = 0; i < N; ++i) //create pointer for al vertices
 {
 arrNode[i] = nullptr;
 }
 for (int i = 0; i < n; i++) //add edges to build directed graph
 {
 int start = edges[i].start;
 int end = edges[i].end;
 int weight = edges[i].weight;

 node* temp = addNode(end, weight, arrNode[start]);
 arrNode[start] = temp;
 }
 }

 ~Diagraph()
 {
 for (int i = 0; i < numberOfNode; i++)
 {
 delete[] arrNode[i];
 }

 delete[] arrNode;
 }
};
void showAdjacentNode(node* temp, int i)
{
while (temp != nullptr)
{
cout << "(" << i << ", " << temp->data
 << ", " << temp->cost << ") ";

 temp = temp->next;
}
cout << endl;
}
int main()
{
graph edges[] = { {0,1,2}, {0,2,4}, {1,4,3},
 {2,3,2}, {3,1,4}, {4,3,3} };
int numberOfNode = 6;
int numberOfEdge = sizeof(edges)/sizeof(edges[0]);
Diagraph* d1 = new Diagraph(edges, numberOfEdge, numberOfNode);
cout << "Adjacent node in (start, end, weight) format:" << endl;
for (int i = 0; i < numberOfNode; i++)
{
 showAdjacentNode(d1->arrNode[i], i);
}
return 0;
}
