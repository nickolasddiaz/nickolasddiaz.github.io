//Filename: CGame.cpp
#include "Final_Project_Game.h"
#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <time.h>
using namespace std;


CGame::CGame() {
	ID = "0000";
	Duration = ZERO;
	rate = 0;
	centerID = "None";
	ar1ID = "None";
	ar2ID = "None";
}

CGame::CGame(string id, int DURATION, float RATE) {
	ID = id;
	Duration = GameDuration(DURATION);
	rate = RATE;
	centerID = "None";
	ar1ID = "None";
	ar2ID = "None";
}

void CGame::setRate(float rate1) {
	rate = rate1;
}

float CGame::getRate()
{
	return rate;
}

void CGame::display() {
	cout.setf(ios::left);
	cout << endl << setw(6) << "ID" << setw(15) << "DURATION" << setw(10) << "RATE" << setw(20) << "Center Ref" << setw(20) << "ASS Ref 1" << setw(20) << "ASS Ref 2" << endl;
	cout << "==============================================================================================\n";
}

void CGame::getInfo() {
	string tempduration;
	if (ID != "0000") {
		switch (Duration) {
		case 50:
			tempduration = "FIFTY";
			break;
		case 60:
			tempduration = "SIXTY";
			break;
		case 70:
			tempduration = "SEVENTY";
			break;
		case 80:
			tempduration = "EIGHTY";
			break;
		case 90:
			tempduration = "NINETY";
			break;
		default:
			tempduration = "ZERO";
		}
		cout << setw(6) << ID << setw(15) << tempduration << setw(10) << rate << setw(20) << centerID << setw(20) << ar1ID << setw(20) << ar2ID << endl;
	}
	
}