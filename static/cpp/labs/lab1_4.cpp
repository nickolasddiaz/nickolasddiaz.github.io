#include <iostream>
#include <string>
#include <cmath>
using namespace std;
class point
{
public:
	int x;
	int y;
	float distance()
	{
		return sqrt(x * x + y * y);
	}
};
int main()
{
	point* p = new point();
	p->x = 14;
	p->y = 63;
	cout << "(" << p->x << ", " << p->y << ")" << endl;
	cout << p->distance() << endl;
	return 0;
}
