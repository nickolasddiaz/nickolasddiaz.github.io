#include "Homework_10_pch.h"
#include <string>
#include <iostream>
using namespace std;


int main(){
    CGame firstGame;
    cout << "The default information of the first game: \n";
    firstGame.showInfo();
    cout << "Update information of the first game: \n";
    firstGame.getInfo();
    cout << "The updated information of the first game: \n";
    firstGame.showInfo();
    cout << "Modifying the pay rate to $3.00. \n";
    firstGame.setPayRate(3.0);
    cout << "The pay rate amount is now: " << firstGame.getPayRate() << endl;
    CGame secondGame("W0002", EIGHTY, 2.5);
    cout << "The initial information of the second game: \n";
    secondGame.showInfo();
    cout << "Modifying the pay rate to $3.25. \n";
    secondGame.setPayRate(3.25);
    cout << "The modified pay rate is now: " << secondGame.getPayRate() << endl;
    cout << "The updated information of the second game: \n";
    secondGame.showInfo();
    return 0;
}
