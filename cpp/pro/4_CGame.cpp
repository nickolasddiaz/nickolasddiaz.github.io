#include "Project_4_CGame.h"
#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;




CGame::CGame(){
	ID = "G000";
	Duration = ZERO;
	rate = 0;
}

void CGame::setRate(float rate1){
	rate = rate1;
}

float CGame::getRate(){
	return rate;
}

void CGame::display(){
	cout.setf(ios::left);
	cout << endl
		<< setw(6) << "ID"
		<< setw(15) << "DURATION"
		<< setw(10) << "RATE" << "\n";
	cout << "===============================================\n";
}

void CGame::getInfo(){
	if (ID != "G000") {
		cout << setw(6) << ID
			<< setw(15) << Duration
			<< setw(10) << rate << "\n";
	}
}

CGame::CGame(string id, GameDuration duration, float rate) {
	ID = id;
	Duration = duration;
	rate = rate;
}

