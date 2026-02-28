#include "Homework_12_pch.h"
#include <string>
#include <iostream>
using namespace std;
int main()
{
    CReferee firstRef;
    cout << "The default information of the first ref: \n";
    firstRef.showInfo();
    firstRef.getInfo();
    cout << "The inputted information of the first ref: \n";
    firstRef.showInfo();
    cout << "Modifying the grade to NATIONAL. \n";
    firstRef.setGrade(NATIONAL);
    cout << "The referee grade is now: " << firstRef.getGrade() << endl;
    CReferee secondRef("R0002", "Arby", "Sample", CLUB);
    cout << "The initial information of the second ref: \n";
    secondRef.showInfo();
    cout << "Modifying the grade to STATE. \n";
    secondRef.setGrade(STATE);
    cout << "The modified grade is now: " << secondRef.getGrade() << endl;
    cout << "The updated information of the second ref: \n";
    secondRef.showInfo();
    return 0;
}