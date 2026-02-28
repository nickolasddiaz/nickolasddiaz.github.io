//Filename: Source.cpp
//Programmer:  Nickolas Diaz                    CSCI 123, Spring 2023
//Project 3x                                    Instructor:  Timothy Mai
//Due Date: 4-1-23                              Date Submitted: 3-19-23
//Program Description: Referee Database
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

enum RefereeGrade { UNKNOWN, CLUB, STATE, NATIONAL, FIFA };
string GradeString[] = { "UNKNOWN", "CLUB", "STATE", "NATIONAL", "FIFA" };

struct SReferee
{
    string ID, fName, lName; RefereeGrade grade;
};

int menu();
void listAllReferees();
void listRefereesOfSpecificGrade();
void listtRefereesWithGradeHigherThanSpecificGrade();
void listtRefereesWithGradeLowerThanSpecificGrade();
void listtRefereeInfoWithId();
void listtRefereeInfoWithNames();
void addNewReferee();
void removeReferee();
void updateRefereeGrade();
void Quit();
int getlistlength();
int checkid(string id, int x);
void print(int search);
void ioss();

RefereeGrade getGrade();
string input;
// function to return the index of a referee in the list with his/her ID
// return -1 if not found
int searchReferee(string id);

// function to return the index of a referee in the list with his/her first and last names
// return -1 if not found
int searchReferee(string first, string last);
const int SIZE = 20;
SReferee referees[SIZE] = {

       { "0001", "Mike", "Apple", CLUB },
       { "0012", "Josh", "Boeing", STATE },
       { "0103", "Linda", "Intel", STATE },
       { "0084", "John", "Rambus", NATIONAL },
       { "0205", "Becky", "Sirius", CLUB },
       { "0045", "Tom", "Skyworks", CLUB },
       { "0807", "Kevin", "Suzuki", NATIONAL },
       { "0074", "Henry", "Xilinx", STATE },
       { "0000", "None", "None", UNKNOWN },
       { "0000", "None", "None", UNKNOWN }
};

int main()
{
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
            listtRefereesWithGradeHigherThanSpecificGrade();
            break;
        case 4:
            listtRefereesWithGradeLowerThanSpecificGrade();
            break;
        case 5:
            listtRefereeInfoWithId();
            break;
        case 6:
            listtRefereeInfoWithNames();
            break;
        case 7:
            addNewReferee();
            break;
        case 8:
            removeReferee();
            break;
        case 9:
            updateRefereeGrade();
            break;
        case 10:
            Quit();
            break;
        default:
            cout << "That was an invalid choice, please try again! \n";
        }
        system("PAUSE");
    } while (choice > 0 && choice < 10);
return 0;
}

int menu()
{
    int option;
    cout << "             REFEREE ASSIGNING SYSTEM \n\n";
    cout << " 1.  List All Referees. \n";
    cout << " 2.  List All Referees Of A Specific Grade. \n";
    cout << " 3.  List All Referees With Grade Higher A Specific Grade. \n";
    cout << " 4.  List All Referees With Grade Lower A Specific Grade. \n";
    cout << " 5.  List Referee Information With ID. \n";
    cout << " 6.  List Referee Information With Names. \n";
    cout << " 7.  Add New Referee. \n";
    cout << " 8.  Remove A Referee. \n";
    cout << " 9.  Update Referee Grade. \n";
    cout << "10.  Quit. \n\n";
    cout << "Please select your option: ";
    cin >> option;
    while (option < 1 || option > 10)
    {
        cout << "Invalid option!!! Please select valid option: ";
        cin >> option;
    }
    return option;
}



void listAllReferees()
{
    cout.setf(ios::left);
    cout << endl
        << setw(6) << "ID"
        << setw(15) << "FIRST NAME"
        << setw(15) << "LAST NAME"
        << setw(10) << "GRADE" << "\n";
    cout << "===============================================\n";
    int count = 0;
    for (int i = 0; i < getlistlength(); i++)
        if (referees[i].ID != "0000")
        {
            cout << setw(6) << referees[i].ID
                << setw(15) << referees[i].fName
                << setw(15) << referees[i].lName
                << setw(10) << GradeString[(int)referees[i].grade] << "\n";
            count++;
        }

    if (!count)  
        cout << "There is no referee in the list" << endl << endl;
    else
        cout << endl;
}

void listRefereesOfSpecificGrade()
{
    RefereeGrade grade = getGrade();
    ioss();
    int count = 0;
    for (int i = 0; i < getlistlength(); i++)
        if (referees[i].ID != "0000" &&
            referees[i].grade == grade)
        {
            print(i);
            count++;
        }

    if (!count)  
        cout << "There is no referee with the grade equal to " << GradeString[(int)grade] << endl << endl;
    else
        cout << endl;
}

void listtRefereesWithGradeHigherThanSpecificGrade()
{
    RefereeGrade grade = getGrade();
    ioss();
    int count = 0;
    for (int i = 0; i < getlistlength(); i++)
        if (referees[i].ID != "0000" &&
            referees[i].grade > grade)
        {
            print(i);
            count++;
        }

    if (!count)  
        cout << "There is no referee with the grade higher to " << GradeString[(int)grade] << endl << endl;
    else
        cout << endl;
}

void listtRefereesWithGradeLowerThanSpecificGrade()
{
    RefereeGrade grade = getGrade();
    int count = 0;
    ioss();
    for (int i = 0; i < getlistlength(); i++)
        if (referees[i].ID != "0000" &&
            referees[i].grade < grade)
        {
            print(i);
            count++;
        }

    if (!count)  
        cout << "There is no referee with the grade lower to " << GradeString[(int)grade] << endl << endl;
    else
        cout << endl;
}

void listtRefereeInfoWithId()
{
    string query;
    cout << "Enter the id to search -->";
    cin >> query;
    int id = searchReferee(query);    
    if (id + 1 && stoi(query)) {
        ioss();
        print(id);
    }
    else {
        cout << "No referees exist for " << query << endl;
    }
}

void listtRefereeInfoWithNames()
{
    string fame, lame;
    cout << "Enter the first and last name together to search -->";
    cin >> fame >> lame;
    fame[0] = (char)toupper(fame[0]);
    lame[0] = (char)toupper(lame[0]);
    int id = searchReferee(fame, lame);
    if (id + 1) {
        ioss();
        print(id);
    }
    else {
        cout << "No referees exist for " << fame << " " << lame << endl;
    }
}

void addNewReferee()
{   
    int search = searchReferee("0000");
    string fame, lame;
    cout << "Give Me The First Name -->";
    cin >> fame;
    cout << "Give Me The First Name -->";
    cin >> lame;
    RefereeGrade grade = getGrade();
    string id;
    int x = getlistlength();
 
    while (1) {
        cout << "Give Me The ID Number";
        cin >> id;
        if (checkid(id, x))
            break;
        cout << "ID no more than 4 digits and cannot match other referree's IDS \n";
    }
    
    if (search + 1) {
        search = getlistlength();
    }
    fame[0] = (char)toupper(fame[0]);
    lame[0] = (char)toupper(lame[0]);
    referees[search].fName = fame;
    referees[search].lName = lame;
    referees[search].grade = grade;
    referees[search].ID = id;
    ioss();
    print(search);
    
}

void removeReferee()
{
    string fame, lame;
    cout << "Enter the first and last name together to remove -->";
    cin >> fame >> lame;
    fame[0] = (char)toupper(fame[0]);
    lame[0] = (char)toupper(lame[0]);
    int id = searchReferee(fame, lame);
    

    if (id + 1) {
        referees[id].ID = "0000";
        referees[id].fName = "None";
        referees[id].lName = "None";
        referees[id].grade = UNKNOWN;
        cout << endl;
    }
    else {
        cout << "No referees exist for " << fame << " " << lame << endl;
    }
}

void updateRefereeGrade()
{
    string query;
    do {
        cout << "Enter the id to search that is not 0000 -->";
        cin >> query;
    } while (query == "0000");
    int a = searchReferee(query);
    if (a + 1) {
        cout << "Referee's grade is currently " << GradeString[(int)referees[a].grade] << endl;
        RefereeGrade grade = getGrade();
        referees[a].grade = grade;
        cout << "Updated " << referees[a].fName << " " << referees[a].lName << " to " << GradeString[(int)referees[a].grade] << endl;
    }
    else {
        cout << "No referees exist for " << query << endl;
    }
}

void Quit()
{
    cout << "Have a nice day \n\n";
}


RefereeGrade getGrade()
{
    cout << "Please select the number for the referee grade: \n";
    for (int i = 1; i < 5; i++)
        cout << "\t" << i << " --> " << GradeString[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int grade;
    cin >> grade;
    while (grade < 1 || grade > 4)
    {
        cout << "Invalid grade!!! Please select valid grade: ";
        cin >> grade;
    }
    return (RefereeGrade)grade;
}

int searchReferee(string id)
{
    if (id.size() != 4) {
        return -1;
    }
    for (int i = 0; i < SIZE; i++)
        if (referees[i].ID == id)
        {
            return i;
        }
    return -1;
}

int searchReferee(string first, string last)
{
    for (int i = 0; i < SIZE; i++)
        if (first == referees[i].fName && last == referees[i].lName)
            return i;
    return -1;
}

int getlistlength() {
    int length = 0;
    string x = "";
    for (int i = 0; i < 100; i++) {
        if (referees[i].ID != x) {
            length++;
        }
        else {
            break;
        }
    }
    return length;
}
int checkid(string id, int x)
{
    if (id.size() != 4) {
        return 0;
    }
    for (int i = 0; i < x; i++)
    {
        if (referees[i].ID == id)
            return 0;
    }
    return 1;
}
void ioss() {
    cout.setf(ios::left);
    cout << endl
        << setw(6) << "ID"
        << setw(15) << "FIRST NAME"
        << setw(15) << "LAST NAME"
        << setw(10) << "GRADE" << "\n";
    cout << "===============================================\n";
}
void print(int search) {
    cout << setw(6) << referees[search].ID
        << setw(15) << referees[search].fName
        << setw(15) << referees[search].lName
        << setw(10) << GradeString[(int)referees[search].grade] << "\n";
}