//Filename: pch.cpp
//Programmer:  Nickolas Diaz                    CSCI 123, Spring 2023
//Project 5x                                    Instructor:  Timothy Mai
//Due Date: 4-22-23                              Date Submitted: 4-14-23
//Program Description: Referee Database

#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <time.h>
using namespace std;

enum GameDuration { ZERO = 0, FIFTY = 50, SIXTY = 60, SEVENTY = 70, EIGHTY = 80, NINETY = 90 };

class CGame {
public:
	CGame();
	CGame(string ID, int DURATION, float RATE);
	void setRate(float rate1);
	float getRate();
	void display();
	void getInfo();
	string ID;
	string centerID, ar1ID, ar2ID;
	GameDuration Duration;
private:
	float rate;
};

