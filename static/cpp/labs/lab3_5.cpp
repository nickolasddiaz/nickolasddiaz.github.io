#include <iostream>
using namespace std;
struct Revenue
{
short year;
double amount;
};
struct Branch
{
short index;
string city;
Revenue q1, q2, q3, q4;
};
int main()
{
Branch b1 = { 0, "Irvine" };
b1.q1.year = 2029;
b1.q1.amount = 45.7;
b1.q2.amount = 51.3;
b1.q3.amount = 48.6;
b1.q4.amount = 50.9;
cout << b1.q1.year << " " << b1.city << endl;
cout << b1.q1.amount << "\t" << b1.q2.amount << "\t"
 << b1.q1.amount << "\t" << b1.q1.amount << endl;
Branch b2 = { 1, "Cypress", { 2029, 39.82 }, { NULL, 43.6 },
 { NULL, 44.1}, { NULL, 38.5} };
cout << b2.q1.year << " " << b2.city << endl;
cout << b2.q1.amount << "\t" << b2.q2.amount << "\t"
 << b2.q1.amount << "\t" << b2.q1.amount << endl;

}
