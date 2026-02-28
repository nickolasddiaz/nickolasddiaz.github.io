#include <iostream>
using namespace std;
class Graph
{
private:
 bool** edges;
 int N; //number of nodes
public:
 Graph(int N)
 {
 this->N = N;

 edges = new bool*[N];

 for (int i = 0; i < N; i++)
 {
 edges[i] = new bool[N];

 for (int j = 0; j < N; j++)
 {
 edges[i][j] = false;
 }
 }
 }
 void addEdge(int i, int j)
 {
 if (i >= 0 && i < N && j > 0 && j < N)
 {
 edges[i][j] = true;
 edges[j][i] = true;
 }
 }
 void removeEdge(int i, int j)
 {
 if (i >= 0 && i < N && j > 0 && j < N)
 {
 edges[i][j] = false;
 edges[j][i] = false;
 }
 }
 bool isEdge(int i, int j)
 {
 if (i >= 0 && i < N && j > 0 && j < N)
 {
 return edges[i][j];
 }
 else
 {
 return false;
 }
 }
 void showMatrix()
 {
 cout << "Matrix:" << endl;
 for (int i = 0; i < N; i++)
 {
 for (int j = 0; j < N; j++)
 {
 cout << edges[i][j] << " ";
 }

 cout << endl;
 }
 }
 ~Graph()
 {
 for (int i = 0; i < N; i++)
 {
 delete[] edges[i];
 }

 delete[] edges;
 }
};
int main()
{
Graph* g1 = new Graph(5);
g1->addEdge(0, 1);
g1->addEdge(0, 4);
g1->addEdge(1, 3);
g1->addEdge(2, 3);
g1->addEdge(2, 4);
g1->addEdge(3, 2);
g1->addEdge(3, 4);
cout << g1->isEdge(0, 1) << endl;
cout << g1->isEdge(1, 4) << endl;
g1->showMatrix();
g1->removeEdge(1, 3);
g1->showMatrix();
}
