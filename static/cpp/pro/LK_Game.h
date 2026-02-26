//Filename: Game.h

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
	CGame(string id, int DURATION, float RATE, string CENTER, string AR1, string AR2);
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

struct GameNode {
	CGame* data;
	GameNode* next;
	GameNode* head;
};
