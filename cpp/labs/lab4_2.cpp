#include <iostream>
using namespace std;
int main()
{
int x[3][5] = { }; // empty set
//populate the row 1
x[0][0] = 11;
x[0][1] = 12;
x[0][2] = 13;
x[0][3] = 14;
x[0][4] = 15;
//populate row 2
x[1][0] = 16;
x[1][1] = 17;
x[1][2] = 18;
x[1][3] = 19;;
x[1][4] = 20;
//populate row 3
x[2][0] = 21;
x[2][1] = 22;
x[2][2] = 23;
x[2][3] = 24;
x[2][4] = 25;
//retrieve values row by row
cout << x[0][0] << endl;
cout << x[0][1] << endl;
cout << x[0][2] << endl;
cout << x[0][3] << endl;
cout << x[0][4] << endl;
cout << x[1][0] << endl;
cout << x[1][1] << endl;
cout << x[1][2] << endl;
cout << x[1][3] << endl;
cout << x[1][4] << endl;
cout << x[2][0] << endl;
cout << x[2][1] << endl;
cout << x[2][2] << endl;
cout << x[2][3] << endl;
cout << x[2][4] << endl;

return 0;
}
