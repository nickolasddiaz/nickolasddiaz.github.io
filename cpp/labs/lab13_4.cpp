#include <iostream>
#include <vector>
using namespace std;
// data structure to store graph edges
struct edge
{
int start;
int end;
};
class Graph
{
public:
vector <vector<int>> node;
Graph(vector<edge> edges, int N)
{
 node.resize(N);
 for (auto edge: edges)
 {
 node[edge.start].push_back(edge.end);
 node[edge.end].push_back(edge.start);
 }
}
};
void showGraph(Graph * g, int N)
{
for (int i = 0; i < N; i++)
{
 cout << i << " ";
 for (int v : g->node[i])
 {
 cout << v << " ";
 }

 cout << endl;
}
}
int main()
{
vector<edge> edges = { { 0, 1 }, { 1, 2 }, { 2, 0 },
 { 2, 1 }, { 3, 2 }, { 4, 5 },
{ 5, 4 } };
// Number of nodes in the graph
int N = 6;
// construct graph
Graph* g1 = new Graph(edges, N);
// print adjacency list representation of graph
showGraph(g1, N);
return 0;
}