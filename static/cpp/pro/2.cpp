//Filename: Project2.cpp
//Programmer:  Nickolas Diaz					CSCI 123, Spring 2023
//Project 2x									Instructor:  Timothy Mai
//Due Date:     3/5/23							Date Submitted: 3/11/23
//Description Soccer Referee Payments
#include <iostream>
using namespace std;

int getGameDuration() {
    int minutes;
    cout << "Enter the game information as follows";
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
    return minutes;
}

double getPricePerMinute() {
    double price;
    cout << "Price per minute is between $1.50 and $5.00: $";
    do {
        cin >> price;
        if (price > 5 || price < 1.5) {
            cout << "Between $1.50 and $5.00: $";
        }
    } while (price > 5 || price < 1.5);
    return price;
}

void getGameInformation(int& d, double& p) {
    d = getGameDuration();
    p = getPricePerMinute();
}

int calculateTotalPayment(int d, double p) {
    int total_payment = d * p;
    return total_payment;
}

void calculateRefPayments(int t, int& cP, int& arP) {
    int rem = t % 3;
    int cen = t * .4;
    int as = t * .3;
    if (rem == 1) {
        cP = cen + 1;
        arP = as;
    }
    else if (rem == 2) {
        cP = cen - 1;
        arP = as + 1;
    }
    else {
        cP = cen;
        arP = as;
    }
}

void printResults(int d, double p, int t, int cP, int arP) {
    cout << endl << "Referee Payment Breakdown..." << endl;
    cout << "Game Duration: " << d << " minutes." << endl;
    cout << "Price Per Minute: $" << p << endl;
    cout << "Total Payment: $" << t << endl;
    cout << "Center Ref's Pay: $" << cP << endl;
    cout << "Assistant Refs' Pay: $" << arP << endl << endl;
}

bool goAgain() {
    string again;
    cout << "Do Another Calculation? (Y/N): ";
    cin >> again;
    return (again[0] == 'Y' || again[0] == 'y');
}

void refPaymentCalculation() {
    int time;
    double price;
    int center_ref;
    int assist_ref;
    getGameInformation(time, price);
    int totalpayment = calculateTotalPayment(time, price);
    calculateRefPayments(totalpayment, center_ref, assist_ref);
    printResults(time, price, totalpayment, center_ref, assist_ref);
    if (goAgain()) {
        refPaymentCalculation();
    }
}

int main() {
    refPaymentCalculation();
    return 0;
}
