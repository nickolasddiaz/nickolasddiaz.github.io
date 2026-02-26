/*
* Filename: ex4_1.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

int main(){
int nottransposed[3][3] = {
{99, 88, 77},
{66, 55, 44},
{33, 22, 11}
};
int vlen = sizeof(nottransposed) / sizeof(nottransposed[0]);
int hlen = sizeof(nottransposed[0]) / sizeof(nottransposed[0][0]);
for (int h = hlen; h > 0;--h){
        for (int v = vlen; v > 0;--v) {
            cout << nottransposed[h-1][v-1] << "\t";
        }
        cout << "\n";
    }

return 0;
}