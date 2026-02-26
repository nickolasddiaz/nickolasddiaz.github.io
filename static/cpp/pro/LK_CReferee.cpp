//Filename: CReferee.cpp
#include "Final_Project_LK_CReferee.h"
#include <iostream>
#include <string>
#include <fstream>
#include <iomanip>
using namespace std;

CReferee::CReferee(){
	grade = UNKNOWN;
	gameid = "None";
	id = "0000";
	fname = "0000";
	lname = "0000";
}

CReferee::CReferee(string ID, string FNAME, string LNAME, int GRADE, string GAMEID) {
	grade = RefereeGrade(GRADE);
	id = ID;
	fname = FNAME;
	lname = LNAME;
	gameid = GAMEID;
}

void CReferee::setGrade(int grade1){
	grade = RefereeGrade(grade1);
}

int CReferee::getGrade(){
	return grade;
}

void CReferee::getInfo(){
	string RefereeGradeToString;
	if (id != "0000") {
		switch (grade) {
		case FIFA:
			RefereeGradeToString = "FIFA";
			break;
		case CLUB:
			RefereeGradeToString = "CLUB";
			break;
		case STATE:
			RefereeGradeToString = "STATE";
			break;
		case NATIONAL:
			RefereeGradeToString = "NATIONAL";
			break;
		default:
			RefereeGradeToString = "UNKNOWN";
		}
		cout << setw(6) << id << setw(15) << fname << setw(15) << lname << setw(20) << RefereeGradeToString << setw(20) << gameid << endl;
	}
}

void CReferee::display(){
	cout.setf(ios::left);
	cout << endl << setw(6) << "ID" << setw(15) << "First Name" << setw(15) << "Last Name" << setw(20) << "Grade" << setw(20) << "Game ID" << endl;
	cout << "==============================================================================================\n";
}

