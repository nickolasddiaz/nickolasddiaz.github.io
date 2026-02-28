//Filename:homework8.cpp
//Programmer: Nickolas Diaz                     CSCI 123, Spring 2023
//Homework #8                                   Instructor:  Timothy Mai
//Due Date:4-8-23                               Date Submitted: 4-7-23
#include <iostream>
using namespace std;
#include <cstring>

int main()
{
    char fname[50], mname[50], lname[50];
    cout << "Give me your first name   ";
    cin >> fname;
    cout << "Give me your middle name  ";
    cin >> mname;
    cout << "Give me your last name    ";
    cin >> lname;
    fname[0] = (char)toupper(fname[0]);
    mname[0] = (char)toupper(mname[0]);
    lname[0] = (char)toupper(lname[0]);
    int flen = strlen(fname);
    int mlen = strlen(mname);
    int llen = strlen(lname);
    int length = flen + mlen + llen;
    char* fullname = new char[length];
    int type = 0;
    for (int i = 0; i < flen; ++i) {
        fullname[type++] = fname[i];
    }
    fullname[type++] = ',';
    fullname[type++] = ' ';
    for (int i = 0; i < mlen; ++i) {
        fullname[type++] = mname[i];
    }
    fullname[type++] = ',';
    fullname[type++] = ' ';
    for (int i = 0; i < llen; ++i) {
        fullname[type++] = lname[i];
    }
    cout <<"Your full name is " << fullname << endl;
    cout << "Number of charactors except whitespace is " << length;





}

