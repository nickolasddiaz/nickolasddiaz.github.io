#include <iostream>
using namespace std;
int getSum(int x[], int size)
{
	int sum = 0;
	for (int i = 0; i < size; i++)
	{
		sum = sum + x[i];
	}
	return sum;
}
int main()
{
	int x[5] = { 1, 2, 3, 4, 5 };
	int size = sizeof(x) / sizeof(x[0]);
	cout << getSum(x, size) << endl;
	return 0;
}
