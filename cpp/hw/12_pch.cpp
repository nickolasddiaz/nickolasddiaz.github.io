//Filename: pch.cpp
//Programmer: Nickolas Diaz				CSCI 123, Spring 2023
//Homework 12							Instructor:  Timothy Mai
//Due Date: 4-8-23						Date Submitted: 4-7-23
#include "Homework_12_pch.h"
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

void CReferee::setGrade(RefereeGrade grade) {
	Grade = grade;
}

string CReferee::getGrade() {
	return stringgrade();
}

void CReferee::showInfo() {
	cout << "ID is " << ID << ", First Name is " << fname << ", Pay rate is " << lname << ", and the grade is " << stringgrade() << endl;
}

int CReferee::inputgrade() {
	int option;
	do {
		cout << "Give me 1 for UNKNOWN, 2 for CLUB, 3 for STATE, 4 for NATIONAL and 5 for FIFA: ";
		cin >> option;
	} while (!(option >= 1 && option <= 5));
	return option;
}

string CReferee::inputid() {
	string temp;
	do {
		cout << "Give me the ID only 4 chars: ";
		cin >> temp;
	} while (temp.length() != 4);
	return temp;
}

string CReferee::inputfname() {
	string temp;
	cout << "Give me the first name: ";
	cin >> temp;
	return temp;
}

string CReferee::inputlname() {
	string temp;
	cout << "Give me the last name: ";
	cin >> temp;
	return temp;
}

void CReferee::getInfo() {
	ID = inputid();
	fname = inputfname();
	lname = inputlname();
	Grade = static_cast<RefereeGrade>(inputgrade());
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