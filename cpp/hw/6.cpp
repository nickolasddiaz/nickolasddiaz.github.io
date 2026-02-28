//Filename: homework 6.cpp
//Programmer:  Nickolas Diaz            CSCI 123, Spring 2023
//homework 6                            Instructor:  Timothy Mai
//Due Date: 4-15-23                     Date Submitted: 4-11-23
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

enum RefereeGrade { UNKNOWN, CLUB, STATE, NATIONAL, FIFA };

struct SReferee
{
    string id;
    RefereeGrade grade;
};

const int REFEREE_LIST_SIZE = 5;
SReferee referees[5];

void initializeReflist();
string gradeToString(RefereeGrade g);
RefereeGrade stringToGrade(string s);
int menu();
void listAllReferees();
void listRefereesOfSpecificGrade();
void readRefereeInfo();
void writeRefereeInfo();
void Quit();

int main()
{
    initializeReflist();
    readRefereeInfo();

    int choice;
    do {
        system("CLS");
        choice = menu();

        switch (choice) {
        case 1:
            listAllReferees();
            break;
        case 2:
            listRefereesOfSpecificGrade();
            break;
        case 3:
            Quit();
            break;
        default:
            cout << "That was an invalid choice, please try again! \n";
        }
        system("PAUSE");
    } while (choice > 0 && choice < 3);

    system("PAUSE");

    return 0;
}

int menu()
{
    int option;

    cout << "     REFEREE SYSTEM \n\n";
    cout << " 1.  List All Referees. \n";
    cout << " 2.  List All Referees Of A Specific Grade. \n";
    cout << " 3.  Quit. \n\n";
    cout << "Please select your option: ";

    cin >> option;
    while (option < 1 || option > 3)
    {
        cout << "Invalid option!!! Please select valid option: ";
        cin >> option;
    }
    return option;
}

void initializeReflist()
{
    SReferee defaultRef = { "0000", UNKNOWN };

    for (int i = 0; i < REFEREE_LIST_SIZE; i++)
        referees[i] = defaultRef;
}

void listAllReferees()
{
    cout << "ID  \tGRADE" << endl
        << "-----------------" << endl;

    bool found = false;

    int i = 0;
    while (i < REFEREE_LIST_SIZE)
    {
        if (referees[i].id != "0000")
        {
            cout << referees[i].id << "\t";
            cout << gradeToString(referees[i].grade);
            cout << endl;
        }
        else
            found = true;

        i++;
    }

    if (!found)
        cout << "NO Referees found!!!" << endl;

}

void listRefereesOfSpecificGrade()
{
    int specificGrade;
    cout << "Please enter the number representing the Referee Grade: \n";
    cout << "1: CLUB" << endl
        << "2: STATE" << endl
        << "3: NATIONAL" << endl
        << "4: FIFA" << endl
        << "----> ";

    do
    {
        cin >> specificGrade;
        if (specificGrade < 1 || specificGrade > 4)
            cout << "Wrong input!  Please re-enter ----> ";
    } while (specificGrade < 1 || specificGrade > 4);

    cout << "ID  \tGRADE" << endl
        << "-----------------" << endl;

    bool found = false;

    int i = 0;
    while (i < REFEREE_LIST_SIZE)
    {
        if (referees[i].id != "0000" && (int)referees[i].grade == specificGrade)
        {
            cout << referees[i].id << "\t";
            cout << gradeToString(referees[i].grade);
            cout << endl;
        }
        else
            found = true;

        i++;
    }

    if (!found)
        cout << "NO Referees found!!!" << endl;

}

void Quit()
{
    // Write Referee information back from the referee array to the file Referees.txt
    writeRefereeInfo();
    cout << "Have a nice day \n\n";
}

void readRefereeInfo()
{
    // Read Referee information from the file Referees.txt to the referee array
    ifstream inFile;
    inFile.open("Referees.txt");
    if (inFile.fail())
    {
        cout << "Error open the input file... Exiting\n";
        exit(1);
    }

    string tempStr;
    int i = 0;
    while (inFile >> referees[i].id)
    {
        inFile >> tempStr;
        referees[i].grade = stringToGrade(tempStr);
        i++;
    }

    inFile.close();
}

void writeRefereeInfo()
{
    ofstream outFile;
    outFile.open("Referees.txt");
    if (outFile.fail())
    {
        cout << "Error open the output file... Exiting\n";
        exit(1);
    }

    int i = 0;
    while (i < REFEREE_LIST_SIZE)
    {
        if (referees[i].id != "0000")
        {
            outFile << referees[i].id << "\t";
            outFile << gradeToString(referees[i].grade) << endl;
            outFile << endl;
        }
        i++;
    }
    outFile.close();
}

string gradeToString(RefereeGrade g)
{
    switch (g) {
    case CLUB:
        return "CLUB";
    case STATE:
        return "STATE";
    case NATIONAL:
        return "NATIONAL";
    case FIFA:
        return "FIFA";
    default:
        return "UNKNOWN";
    }
}

RefereeGrade stringToGrade(string s)
{
    if (s == "CLUB")
        return CLUB;
    else if (s == "STATE")
        return STATE;
    else if (s == "NATIONAL")
        return NATIONAL;
    else if (s == "FIFA")
        return FIFA;
    else
        return UNKNOWN;
}
