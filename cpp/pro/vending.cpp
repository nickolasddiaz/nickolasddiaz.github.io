#include <iostream>
using namespace std;
#include <iomanip>

int main()
{
cout << "Enter the amount";
float costs;
cin >> costs;
int cost = costs * 100;
int dollar = cost / 100; 

cout << setw(10) << "Dollar" << setw(10) << "Dollar" << setw(10) << "Quarter" << setw(10) << "Dime" << setw(10) << "Nickel" << endl;

for (int db = dollar; db >= 0; db--) {
for (int dc = dollar - db; dc >= 0; dc--) {
for (int qu = (cost - (db + dc) * 100)/25; qu >= 0; qu--) {
for (int di = ((cost - (db + dc) * 100) - (qu * 25)) / 10 ; di >= 0; di--) {

cout << setw(10) << db << setw(10) << dc << setw(10) << qu << setw(10) << di << setw(10) << (cost - ((db + dc) * 100) - (qu * 25) - (di * 10)) / 5 << endl;
}}}}
return 0;}
