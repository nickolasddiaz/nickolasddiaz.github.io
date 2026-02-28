//Filename: Homework 11 c.pp
#include "Homework_11_pch.h"
#include <string>
#include <iostream>
using namespace std;
int main()
{
    CReferee firstRef;
    cout << "The default information of the first ref: \n";
    cout << firstRef;
    cin >> firstRef;
    cout << "The inputted information of the first ref: \n";
    cout << firstRef;
    cout << "Modifying the grade to NATIONAL. \n";
    firstRef.setGrade(NATIONAL);
    cout << "The referee grade is now: " << firstRef.getGrade() << endl;
    CReferee secondRef("R0002", "Arby", "Sample", CLUB);
    cout << "The initial information of the second ref: \n";
    cout << secondRef;
    cout << "Modifying the grade to STATE. \n";
    secondRef.setGrade(STATE);
    cout << "The modified grade is now: " << secondRef.getGrade() << endl;
    cout << "The updated information of the second ref: \n";
    cout << secondRef;

}