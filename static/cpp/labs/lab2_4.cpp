#include <iostream>
#include <cmath>
using namespace std;
int main()
{
	int dec, r;
	string result = "";
	char hex[] = { '0', '1', '2', '3', '4', '5', '6', '7',
	 '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
	cout << "Enter a decimal number: ";
	cin >> dec;
	while (dec > 0)
	{
		r = dec % 16;
		result = hex[r] + result;
		dec = dec / 16;
	}
	cout << "Hexadecimal number: " << result << "\n";
	return 0;
}