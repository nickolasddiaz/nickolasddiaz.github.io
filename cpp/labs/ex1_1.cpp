/*
* Filename: ex1_1.cpp
* Programmer: Nickolas Diaz
*/

#include <iostream>
using namespace std;

struct student
{
    	string firstname;
	string lastname;
	int age;
	char gender;
	string studentid;
	string major;
	bool married;
};

void printstudent(student s0){ 
cout << s0.firstname << "\t" << s0.lastname << "\t" <<  s0.age << "\t" << s0.gender << "\t" << s0.studentid << "\t" << s0.major << "\t" << s0.married << "\n";
}

int main()
{
struct student s01 = {"Emiley", "Smith", 54, 'F', "D88002301", "CIS", 1};
struct student s02 = {"Steve", "Barley", 27, 'M', "D88002302", "MBA", 1};
struct student s03 = {"Nicole", "Chang", 36, 'F', "D88002303", "CET", 0};
struct student s04 = {"Justin", "Poliki", 25, 'M', "D88002304", "HIT", 1};
printstudent(s01);
printstudent(s02);
printstudent(s03);
printstudent(s04);


return 0;
}