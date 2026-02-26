#pragma once

#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

enum GameDuration { ZERO = 0, FIFTY = 50, SIXTY = 60, SEVENTY = 70, EIGHTY = 80, NINETY = 90 };


class CGame {
public:
	CGame();
	void setRate(float rate1);
	float getRate();
	void display();
	void getInfo();
	CGame(string id, GameDuration duration, float rate);
	string ID;
	GameDuration Duration;
private:
	float rate;
};

