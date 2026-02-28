//Filename: Homework16.cpp
//Programmer:  Nickolas Diaz            CSCI 123, Spring 2023
//Homework #16                           Instructor:  Timothy Mai
//Due Date: 5-6-23                      Date Submitted: 4-30-23
#include <iostream>
using namespace std;

class TimeFormatMistake {
};

int main() {
    int hour, minute;
    string loop = " ";
    while (loop[0] != 'n' && loop[0] != 'N') {
        cout << "Enter time in 24-hour format:\n";
        cout << "Hour: ";
        try {
            cin >> hour;
            cout << "Minute: ";
            cin >> minute;
            if (hour < 0 || hour > 23) {
                throw TimeFormatMistake();}

            if (minute < 0 || minute > 59) {
                throw TimeFormatMistake();}

            cout << "That is ";

            if (hour == 0) {
                cout << "12";}
            else if (hour > 12) {
                cout << hour - 12;}
            else {
                cout << hour;}

            cout << ":";

            if (minute < 10) {
                cout << "0";}

            std::cout << minute;

            if (hour < 12) {
                std::cout << " AM" << endl;}
            else {
                std::cout << " PM" << endl;}}
        catch (TimeFormatMistake) {
            cout << "There is no such time as " << hour << ":" << minute << endl;}

        cout << "Again (y/n)? ";
        cin >> loop;
    }

    cout << "Good-bye\n";
    return 0;
}