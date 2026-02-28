#include <iostream>
#include <string>
using namespace std;
struct seasons
{
	int index;
	string value;
};
int main()
{
	seasons s1, s2, s3, s4; //declare data elements
	s1 = { 0, "Spring" }; // 1st data element
	s2 = { 1, "Summer" }; // 2nd data element
	s3 = { 2, "Fall" }; // 3rd data element
	s4 = { 3, "Winter" }; // 4th data element
	cout << s1.index << " " << s1.value << endl;
	cout << s2.index << " " << s2.value << endl;
	cout << s3.index << " " << s3.value << endl;
	cout << s4.index << " " << s4.value << endl;
	return 0;
}
