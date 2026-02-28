#pragma once
#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <time.h>
using namespace std;

enum RefereeGrade { UNKNOWN, CLUB, STATE, NATIONAL, FIFA };

class CReferee {
public:
	CReferee();
	CReferee(string ID, string FNAME, string LNAME, int GRADE);
	void setGrade(int grade1);
	int getGrade();
	void display();
	void getInfo();
	string id;
	string fname, lname, gameid;
private:
	RefereeGrade grade;
};

