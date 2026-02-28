#include <iostream>
using namespace std;
int main()
{
	int arr[5] = { 11, 12, 13, 14, 15 };

	int* ptr = arr;

	cout << ptr << endl;
	for (int i = 0; i < 5; i++)
	{
		cout << &ptr[i] << endl;
	}
	for (int i = 0; i < 5; i++)
	{
		cout << ptr[i] << endl; // 11
	}

	return 0;
}
