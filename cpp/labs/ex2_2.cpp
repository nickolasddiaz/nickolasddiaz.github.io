/*
* Filename: ex2_2.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
#include <cmath>


string weekday[7] = { "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };

void findDayOfWeek(int year, int month, int day){ //Zeller’s algorithm on page 21
switch (month){
 case 1: month = 13; year=year-1; break;
 case 2: month = 14; year=year-1; break;
 default: month = month;
}
int c = year / 100;
int y = year % 100;
int dayofweek = (day + floor((13*(month+1))/5) + y + floor(y/4) + floor(c/4) + (5*c));
dayofweek %= 7;
cout << weekday[dayofweek] << "\n";
}

int main(){
findDayOfWeek(2045, 1, 4);
findDayOfWeek(2045, 2, 4);
findDayOfWeek(2045, 3, 4);
findDayOfWeek(2045, 4, 4);
findDayOfWeek(2045, 5, 4);
findDayOfWeek(2045, 6, 4);
findDayOfWeek(2045, 7, 4);
findDayOfWeek(2045, 8, 4);
findDayOfWeek(2045, 9, 4);
findDayOfWeek(2045, 10, 4);
findDayOfWeek(2045, 11, 4);
findDayOfWeek(2045, 12, 4);

return 0;
}
