/*
* Filename: ex7_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
#include <queue>
using namespace std;

struct takeout {
  string dishname;
  int servicetype;
  int numoforders;
  string waiter;
};

int main()
{
queue <takeout> calls;
calls.push({"Steamed Rice Cake", 7, 2, "AJ"});
calls.push({"Vietnamese Sandwich", 4, 1, "KM"});
calls.push({"Fried Spring Rolls", 2, 2, "JR"});
calls.push({"Sizzling Pancake", 5, 3, "CW"});
calls.push({"Beef Vermicelli Soup", 1, 2, "PK"});



cout << "Dish Name\t\tService Type\tNumber of orders\tWaiter/Waitress" << endl;
while (!calls.empty())
{
 takeout current = calls.front();
 cout << current.dishname << "\t\t" << current.servicetype << "\t\t" << current.numoforders << "\t\t" << current.waiter << endl;
 calls.pop();
}
}
