//Filename: pch.h
//Programmer: Nickolas Diaz					CSCI 123, Spring 2023
//Homework 10								Instructor:  Timothy Mai
//Due Date:	4-8-23							Date Submitted: 4-7-23
#ifndef HOMEWORK_10_PCH_H
#define HOMEWORK_10_PCH_H
#include <string>
#include <iostream>
using namespace std;

enum GameDuration { ZERO = 0, FIFTY = 50, SIXTY = 60, SEVENTY = 70, EIGHTY = 80, NINETY = 90 };

class CGame {
public:
	CGame();
	CGame(string id, GameDuration duration, float pay);
	string ID;
	void showInfo();
	void getInfo();
	float getPayRate();
	void setPayRate(float pay);
	string inputID();
	int inputDuration();
	float inputPayRate();
	GameDuration Duration;
private:
	float PayRate;
};
#endif