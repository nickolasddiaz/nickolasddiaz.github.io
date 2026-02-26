/*
* Filename: ex13_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
const int N =5;
char node[N] = {'A', 'B', 'C', 'D', 'E'};

int edges[N][N];
void addEdge(int start, int end){
edges[start][end] = 1;
edges[end][start] = 1;
}

void showMatrix(){
cout << "Matrix:" << endl;
for (int i = 0; i < N; i++){
 for (int j = 0; j < N; j++){
 cout << edges[i][j] << " ";
 }
 cout << endl;
}}

int getNodeId(char v){
for (int i=0; i<N; i++){
 if(node[i] == v){
 return i;
 break;
 }
}
return -1;
}

bool isAdjacent(char v1, char v2){
int i = getNodeId(v1);
int j = getNodeId(v2);
if (i == -1 || j == -1) {
 return false;
}
return edges[i][j];
}

void showAdjescent(char v){
int i = getNodeId(v);
if (i == -1){
 return;
}
for (int j=0; j<N; j++){
 if(edges[i][j] != 0)
 {
 cout << node[j] << " ";
 }}
cout << endl;
}

int main(){
addEdge(0, 1);
addEdge(0, 4);
addEdge(1, 3);
addEdge(2, 3);
addEdge(2, 1);
addEdge(3, 2);
addEdge(3, 4);
addEdge(1, 4);

showMatrix();
return 0;
}
