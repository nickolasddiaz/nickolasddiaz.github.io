#include <iostream>
using namespace std;
struct Point
{
	int x;
	int y;
	Point() //default constructor
	{
		x = 0;
		y = 0;
	}
	Point(int _x, int _y) // parameterized constructor
	{
		x = _x;
		y = _y;
	}
};
int main()
{
	Point p1;
	cout << p1.x << " " << p1.y << endl;
	Point p2(4, 7);
	cout << p2.x << " " << p2.y << endl;
	return 0;
}