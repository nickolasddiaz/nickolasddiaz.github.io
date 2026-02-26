//Filename: pch.cpp
//Programmer: Nickolas Diaz				CSCI 123, Spring 2023
//Homework 11							Instructor:  Timothy Mai
//Due Date: 4-18-23						Date Submitted: 4-22-23
#include "Homework_11_pch.h"
#include <string>
#include <iostream>
using namespace std;

CReferee::CReferee() {
	ID = "R000";
	fname = "NONE";
	lname = "NONE";
	Grade = UNKNOWN;
}

CReferee::CReferee(string id, string fame, string lame, RefereeGrade grade) {
	ID = id;
	fname = fame;
	lname = lame;
	Grade = grade;
}

void CReferee::setGrade(int option) {
	switch (option) {
	case 1:
		Grade = UNKNOWN;
		break;
	case 2:
		Grade = CLUB;
		break;
	case 3:
		Grade = STATE;
		break;
	case 4:
		Grade = NATIONAL;
		break;
	case 5:
		Grade = FIFA;
		break;
	default:
		Grade = UNKNOWN;
		break;
	}
}

string CReferee::getGrade() {
	return stringgrade();
}



int CReferee::inputgrade() {
	int option;
	do {
		cout << "Give me 1 for UNKNOWN, 2 for CLUB, 3 for STATE, 4 for NATIONAL and 5 for FIFA: ";
		cin >> option;
	} while (!(option >= 1 && option <= 5));
	return option;
}

string CReferee::stringgrade() {
	switch (Grade) {
	case UNKNOWN:
		return "Unknown";
		break;
	case CLUB:
		return "Club";
		break;
	case STATE:
		return "State";
		break;
	case NATIONAL:
		return "National";
		break;
	case FIFA:
		return "FIFA";
		break;
	default:
		return "Invalid grade";
		break;
	}
}
 std::ostream& operator<<(std::ostream& os, const CReferee& p) {
	os << "ID: " << p.ID << " First Name: " << p.fname << " Last Name: " << p.lname << " Grade: " << p.GradeString[p.Grade] << endl;
	return os;
}
 std::istream& operator>>(std::istream& in, CReferee& p) {
	 do {
		 cout << "Give me the ID only 4 chars: ";
		 in >> p.ID;
	 } while (p.ID.length() != 4);
	 cout << "Give me the first name: ";
	 in >> p.fname;
	 cout << "Give me the last name: ";
	 in >> p.lname;
	 int option;
	 do {
		 cout << "Give me 1 for UNKNOWN, 2 for CLUB, 3 for STATE, 4 for NATIONAL and 5 for FIFA: ";
		 in >> option;
	 } while (!(option >= 1 && option <= 5));
	 p.setGrade(option);
	 
	 return in;
 }