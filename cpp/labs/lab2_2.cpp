#include <iostream>
#include <cmath>
using namespace std;
void quadratic(int a, int b, int c)
{
	int n = b * b - 4 * a * c;
	if (n < 0)
	{
		cout << "No solvable because b^2-4ac < 0." << endl;
	}
	else
	{
		cout << "x1 = " << (-b + sqrt(n)) / (2 * a) << ", ";
		cout << "x2 = " << (-b - sqrt(n)) / (2 * a) << endl;
	}
}
int main()
{
	quadratic(3, 17, -192);
	quadratic(7, -2, 33);
	quadratic(62, 38, -243);
	return 0;
}
