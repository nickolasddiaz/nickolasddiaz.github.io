//Filename: pch.h
#ifndef HOMEWORK_12_PCH_H
#define HOMEWORK_12_PCH_H
#include <iostream>
using namespace std;

enum RefereeGrade { UNKNOWN, CLUB, STATE, NATIONAL, FIFA };

class CReferee {
	public:
		CReferee();
		CReferee(string id, string fame,string lame, RefereeGrade grade);
		string ID, fname, lname;
		void getInfo();
		void showInfo();
		string getGrade();
		void setGrade(RefereeGrade grade);
		int inputgrade();
		string inputid();
		string inputfname();
		string inputlname();
		string stringgrade();

	private:
		RefereeGrade Grade;
};

#endif
