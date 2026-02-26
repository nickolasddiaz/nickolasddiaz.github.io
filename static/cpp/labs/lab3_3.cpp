#include <iostream>
using namespace std;
struct Employee
{
	short id;
	int age;
	double wage;
};
int main()
{
	Employee jlo;
	jlo.id = 14;
	jlo.age = 52;
	jlo.wage = 94.15;
	Employee nkid = { 15, 54, 90.75 };
	cout << jlo.id << "\t" << jlo.wage * 44 << endl;
	cout << nkid.id << "\t" << nkid.wage * 44 << endl;
	return 0;
}