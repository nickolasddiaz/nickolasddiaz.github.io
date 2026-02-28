#include <iostream>
using namespace std;
int main()
{
double sales[2][4][3] = { };
//row 0
//column 0
sales[0][0][0] = 50.1; //layer 0
sales[0][0][1] = 57.5; //layer 1
sales[0][0][2] = 65.4; //layer 2
//column 1
sales[0][1][0] = 52.5; //layer 0
sales[0][1][1] = 55.4; //layer 1
sales[0][1][2] = 67.9; //layer 2
//column 2
sales[0][2][0] = 55.6; //layer 0
sales[0][2][1] = 52.9; //layer 1
sales[0][2][2] = 60.2; //layer 2
//column 3
sales[0][3][0] = 56.7; //layer 0
sales[0][3][1] = 66.2; //layer 1
sales[0][3][2] = 70.1; //layer 2
//row 1
//column 0
sales[1][0][0] = 51.2; //layer 0
sales[1][0][1] = 54.3; //layer 1
sales[1][0][2] = 62.7; //layer 2
//column 1
sales[1][1][0] = 54.8; //layer 0
sales[1][1][1] = 55.1; //layer 1
sales[1][1][2] = 65.3; //layer 2
//column 2
sales[1][2][0] = 52.3; //layer 0
sales[1][2][1] = 54.8; //layer 1
sales[1][2][2] = 60.6; //layer 2
//column 3
sales[1][3][0] = 60.7; //layer 0
sales[1][3][1] = 67.4; //layer 1
sales[1][3][2] = 72.5; //layer 2
int rsize = sizeof(sales) / sizeof(sales[0]); //2
int csize = sizeof(sales[0]) / sizeof(sales[0][0]); //4
int lsize = sizeof(sales[0][0]) / sizeof(sales[0][0][0]); //3
cout << "r: " << rsize << endl; //display number of rows
cout << "c: " << csize << endl; //display number of columns
cout << "l: " << lsize << endl; //display number of layers
for (int r=0; r<rsize; r++) //iterate thru rows
{
 for (int c=0; c<csize; c++) //iterate thru columns
 {
 for (int l=0; l<lsize; l++) //iterate thru layers
 {
 cout << sales[r][c][l] << endl;
 }
 }
}
}
