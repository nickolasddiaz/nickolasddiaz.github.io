//Filename:
//Programmer:  Nickolas Diaz            CSCI 123, Spring 2023
//Project #x                            Instructor:  Timothy Mai
//Due Date:   5-10-2023                 Date Submitted: 5-13-2023
//Program Description: Soccer game database
#include "Project_4_CGame.h"
#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

string space = "                  ";
CGame* games = new CGame[12];
string DurationString[6] = { "ZERO", "FIFTY", "SIXTY", "SEVENTY", "EIGHTTY", "NINETY" };

void readGameInfo() {
    ifstream inFile("Project_4_games.txt");
    if (inFile.fail())
    {
        cout << "Error open the input file... Exiting\n";
        exit(1);
    }
    string id;
    int dur;
    float pay;
    int i = 0;
    while (inFile >> id >> dur >> pay)
    {
        games[i].ID = id;
        games[i].Duration = static_cast<GameDuration>(dur);
        games[i].setRate(pay);
        i++;
    }
    inFile.close();
}

void writeGameInfo() {
        ofstream outFile("Project_4_games.txt");
        if (outFile.fail())
        {
            cout << "Error open the output file... Exiting\n";
            exit(1);
        }
        for (int i = 0; i < 12; i++) {
            string space = "                  ";
            string temp;
            if (games[i].ID != "G000") {
                temp = games[i].ID + space + to_string(games[i].Duration) + space + to_string(games[i].getRate());
                outFile << temp << endl;
        }
    }
}

void listAllGames() {
    games[0].display();
    for (int i = 0; i < 12; i++) {
        games[i].getInfo();
    }
}

void listDurGames() {
    cout << "Please select the number for the referee Duration: \n";
    for (int i = 1; i < 6; i++)
        cout << "\t" << i << " --> " << DurationString[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int Duration;
    cin >> Duration;
    while (Duration < 1 || Duration > 6)
    {
        cout << "Invalid Duration!!! Please select valid Duration: ";
        cin >> Duration;
    }
    Duration = (Duration * 10) + 40;
    games[0].display();

    for (int i = 0; i < 12; i++) {
        if (Duration == games[i].Duration) {
            if (games[i].ID != "G000")
                games[i].getInfo();
        }
    }
}

void listDurlessGames() {
    cout << "Please select the number for the referee Duration: \n";
    for (int i = 1; i < 6; i++)
        cout << "\t" << i << " --> " << DurationString[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int Duration;
    cin >> Duration;
    while (Duration < 1 || Duration > 6)
    {
        cout << "Invalid Duration!!! Please select valid Duration: ";
        cin >> Duration;
    }
    Duration = (Duration * 10) + 40;
    games[0].display();

    for (int i = 0; i < 12; i++) {
        if (Duration < games[i].Duration) {
            if (games[i].ID != "G000")
                games[i].getInfo();
        }
    };
}

void listDurhigherGames() {
    cout << "Please select the number for the referee Duration: \n";
    for (int i = 1; i < 6; i++)
        cout << "\t" << i << " --> " << DurationString[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int Duration;
    cin >> Duration;
    while (Duration < 1 || Duration > 6)
    {
        cout << "Invalid Duration!!! Please select valid Duration: ";
        cin >> Duration;
    }
    Duration = (Duration * 10) + 40;
    games[0].display();

    for (int i = 0; i < 12; i++) {
        if (Duration > games[i].Duration) {
            if (games[i].ID != "G000")
                games[i].getInfo();
        }
    }
}

void listByID() {
    string temp;
    int temps = -1;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> temp;
        for (int i = 0; i < 12; i++) {
            if (games[i].ID == temp) {
                temps = i;
            }
        }
    } while (temp.size() != 5 || temps < -1);

    games[0].display();
    if (temps + 1) {
        games[temps].getInfo();
    }
    else {
        cout << "ID does not exist" << endl;
    }
}

void listSpecificGames() {
    string temp;
    int temps = -1;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> temp;
        for (int i = 0; i < 12; i++) {
            if (games[i].ID == temp) {
                temps = i;
            }
        }
    } while (temp.size() != 5 || temps < -1);

    games[0].display();
    if (temps + 1) {
        int t = games[temps].Duration * games[temps].getRate();
        int rem = t % 3;
        int temp = t - rem;
        int cen, as;
        if (rem == 1) {
            cen = (temp / 4) + 1;
            as = temp / 3;
        }
        else if (rem == 2) {
            cen = temp / 4;
            as = (temp / 3) + 2;
        }
        else {
            as = temp / 3;
            cen = temp / 4;
        }

        cout << endl << "Referee Payment Breakdown..." << endl;
        cout << "Total Payment: $" << t << endl;
        cout << "Center Ref's Pay: $" << cen << endl;
        cout << "Assistant Refs' Pay: $" << as << endl << endl;
    }
}

void addgames() {
    int length = 0;
    int i = 0;
    while (games[i].ID != "G000")
    {
        length = i;
        i++;
    }

    string a;
    int b = 0;
    int temps;
    do {
        temps = 0;
        cout << "Give me the ID only 5 chars: ";
        cin >> a;
        for (int i = 0; i < 12; i++) {
            if (games[i].ID == a) {
                b++;
            }
        }
        if (b > 0) {
            cout << "ID already exists" << endl;
        }
    } while (a.size() != 5 || temps > 0);
    games[length].ID = a;
    cout << "Please select the number for the referee Duration: \n";
    for (int i = 1; i < 6; i++)
        cout << "\t" << i << " --> " << DurationString[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int Duration;
    cin >> Duration;
    while (Duration < 1 || Duration > 6)
    {
        cout << "Invalid Duration!!! Please select valid Duration: ";
        cin >> Duration;
    }
    Duration = (Duration * 10) + 40;
    games[length].Duration = static_cast<GameDuration>(Duration);
    float price;
    cout << "Price per minute is between $1.50 and $5.00: $";
    do {
        cin >> price;
        if (price > 5 || price < 1.5) {
            cout << "Between $1.50 and $5.00: $";
        }
    } while (price > 5 || price < 1.5);
    games[length].setRate(price);
    games[0].display();
    games[length].getInfo();
}

void removegames() {
    string temp;
    int temps = 0;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> temp;
        for (int i = 0; i < 12; i++) {
            if (games[i].ID == temp) {
                temps = i;
            }
        }
    } while (temp.size() != 5 || temps < 0);
    games[temps].ID = "G000";
    games[temps].Duration = ZERO;
    games[temps].setRate(0);
}
void updategames() {
    string temp;
    int temps = 0;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> temp;
        for (int i = 0; i < 12; i++) {
            if (games[i].ID == temp) {
                temps = i;
            }
        }
    } while (temp.size() != 5 || temps < 0);

    string input;
    cout << "Change the id yes/no:";
    cin >> input;
    if (input[0] == 'y') {
        string a;
        int b = 0;
        int tempss;
        do {
            tempss = 0;
            cout << "Give me the ID only 5 chars: ";
            cin >> a;
            for (int i = 0; i < 12; i++) {
                if (games[i].ID == a) {
                    b++;
                    tempss++;
                }
            }

            if (b > 0) {
                cout << "ID already exists" << endl;
            }
        } while (a.size() != 5 || tempss > 0);
        games[temps].ID = a;
    }

    cout << "Change the Duration yes/no:";
    cin >> input;
    if (input[0] == 'y') {
        cout << "Please select the number for the referee grade: \n";
        for (int i = 1; i < 6; i++)
            cout << "\t" << i << " --> " << DurationString[i] << endl;
        cout << endl << setw(15) << "Your selection" << " --> ";
        int grade;
        cin >> grade;
        while (grade < 1 || grade > 6) {
            cout << "Invalid grade!!! Please select valid grade: ";
            cin >> grade;
        }

        grade = (grade * 10) + 40;
        games[temps].Duration = static_cast<GameDuration> (grade);
    }

    cout << "Change the rate yes/no:";
    cin >> input;
    if (input[0] == 'y') {
        float price;
        cout << "Price per minute is between $1.50 and $5.00: $";
        do {
            cin >> price;
            if (price > 5 || price < 1.5)
            {
                cout << "Between $1.50 and $5.00: $";
            }
        } while (price > 5 || price < 1.5);
        games[temps].setRate(price);
    }
}
int main()
{   
    readGameInfo();
    int option;
    do {
        system("CLS");
        cout << "             REFEREE ASSIGNING SYSTEM \n\n";
        cout << " 1.  List all games \n";
        cout << " 2.  List all games of a specific duration \n";
        cout << " 3.  List all games with duration lower than a specific number of minutes \n";
        cout << " 4.  List all games with duration higher than a specific number of minutes \n";
        cout << " 5.  List Referee Information With ID \n";
        cout << " 6.  List information of a specific game \n";
        cout << " 7.  Add a game \n";
        cout << " 8.  Remove a game \n";
        cout << " 9.  Update a game \n";
        cout << "10.  Quit. \n\n";
        cout << "Please select your option: ";
        cin >> option;
        while (option < 1 || option > 10)
        {
            cout << "Invalid option!!! Please select valid option: ";
            cin >> option;
        }
        switch (option) {
        case 1:
            listAllGames();
            break;
        case 2: 
            listDurGames();
              break;
        case 3: 
            listDurlessGames();
              break;
        case 4: 
            listDurhigherGames();
              break;
        case 5: 
            listByID();
              break;
        case 6: 
            listSpecificGames();
              break;
        case 7: 
            addgames();
              break;
        case 8: 
            removegames();
              break;
        case 9: 
            updategames();
              break;
        case 10:
            writeGameInfo();
            cout << "Have a nice day \n\n";
            exit(0);
            break;
        default:
            cout << "That was an invalid choice, please try again! \n";
        }
        system("PAUSE");
    } while (option > 0 && option < 10);
}
