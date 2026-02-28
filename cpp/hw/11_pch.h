//Filename: pch.h
#ifndef HOMEWORK_11_PCH_H
#define HOMEWORK_11_PCH_H
#include <iostream>
using namespace std;

enum RefereeGrade { UNKNOWN, CLUB, STATE, NATIONAL, FIFA };

class CReferee {
public:
	CReferee();
	CReferee(string id, string fame, string lame, RefereeGrade grade);
	string ID, fname, lname;
	string getGrade();
	void setGrade(int option);
	int inputgrade();
	string stringgrade();
	friend std::ostream& operator<<(std::ostream& os, const CReferee& p);
	friend std::istream& operator>>(std::istream& in, CReferee& p);


private:
	RefereeGrade Grade;
	string GradeString[5] = { "UNKNOWN", "CLUB", "STATE", "NATIONAL", "FIFA" };
};

#endif
