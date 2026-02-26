//Filename: Project1.cpp
//Programmer:  Nickolas Diaz					CSCI 123, Spring 2023
//Project 1x									Instructor:  Timothy Mai
//Due Date:     3/5/23							Date Submitted: 3/11/23
//Description Soccer Referee Payments
#include <iostream>
using namespace std;

int main() {
    int minutes;
    double price;
    int center_ref;
    int assist_ref;
    string again;
    do {
        cout << "Enter the game information as follows" << endl;
        cout << "Game duration between 40 to 90 minutes and intervals of 10: ";
        do {
            cin >> minutes;
            if (minutes > 90 || minutes < 40) {
                cout << "Between 40 and 90 please: ";
            }
            if (minutes % 10 != 0) {
                cout << "Multiple of ten please: ";
            }
        } while (minutes > 90 || minutes < 40 || (minutes % 10 != 0));

        cout << "Price per minute is between $1.50 and $5.00: $";
        do {
            cin >> price;
            if (price > 5 || price < 1.5) {
                cout << "Between $1.50 and $5.00: $";
            }
        } while (price > 5 || price < 1.5);

        int total_payment = minutes * price;

        int rem = total_payment % 3;
        int cen = total_payment * .4;
        int as = total_payment * .3;
        if (rem == 1) {
            center_ref = cen + 1;
            assist_ref = as;
        }
        else if (rem == 2) {
            center_ref = cen - 1;
            assist_ref = as + 1;
        }
        else {
            center_ref = cen;
            assist_ref = as;
        }

        cout << endl << "Referee Payment Breakdown..." << endl;
        cout << "Game Duration: " << minutes << " minutes." << endl;
        cout << "Price Per Minute: $" << price << endl;
        cout << "Total Payment: $" << total_payment << endl;
        cout << "Center Ref's Pay: $" << center_ref << endl;
        cout << "Assistant Refs' Pay: $" << assist_ref << endl << endl;

        cout << "Do Another Calculation? (Y/N): ";
        cin >> again;

    } while (again[0] == 'Y' || again[0] == 'y');

    return 0;
}
