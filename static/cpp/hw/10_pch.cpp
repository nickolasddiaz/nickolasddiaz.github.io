//Filename: Homework_10_pch.cpp
#include "Homework_10_pch.h"
#include <iostream>
#include <string>
using namespace std;

CGame::CGame() {
	ID = "G000";
	Duration = ZERO;
	PayRate = 0;
 }

void CGame::setPayRate(float price) {
    PayRate = price;
}
void CGame::showInfo() {
	cout << "ID is " << ID << " Duration is " << Duration << " Pay rate is " << PayRate << endl;
}
float CGame::getPayRate() {
	return PayRate;
}

string  CGame::inputID() {
	string temp;
	do {
		cout << "Give me the ID only 4 chars: ";
		cin >> temp;
	} while (temp.length() != 4);
	return temp;
}

int  CGame::inputDuration() {
	int minutes;
		cout << "Game duration between 50 to 90 minutes and intervals of 10: ";
	do {
		cin >> minutes;
		if (minutes > 90 || minutes < 50) {
			cout << "Between 50 and 90 please: ";
		}
		if (minutes % 10 != 0) {
			cout << "Multiple of ten please: ";
		}
	} while (minutes > 90 || minutes < 50 || (minutes % 10 != 0));
	return minutes;

}

float  CGame::inputPayRate() {
	float price;
	cout << "Price per minute is between $1.50 and $5.00: $";
	do {
		cin >> price;
		if (price > 5 || price < 1.5) {
			cout << "Between $1.50 and $5.00: $";
		}
	} while (price > 5 || price < 1.5);
	return price;
}

void  CGame::getInfo() {
	ID = inputID();
	Duration = static_cast<GameDuration>(inputDuration());
	PayRate = inputPayRate();
}

CGame::CGame(string id, GameDuration duration, float pay) {
	ID = id;
	Duration = duration;
	PayRate = pay;
}