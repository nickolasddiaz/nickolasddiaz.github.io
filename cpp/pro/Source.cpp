//Filename: project4.cpp
#include "Final_Project_Game.h"
#include "Final_Project_CReferee.h"
#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <time.h>
using namespace std;
string DurationGame[6] = { "ZERO", "FIFTY", "SIXTY", "SEVENTY", "EIGHTTY", "NINETY" };
string RefGrade[5] = { "UNKNOWN", "CLUB", "STATE", "NATIONAL", "FIFA" };
string space = "                  ";
CGame* games = new CGame[10];
CReferee* refs = new  CReferee[30];


int RandomIndex(){
    int randNum = rand();
    randNum %= 30;
    return randNum;
}

void readGameInfo() {
    ifstream inFile("Final_Project_games.txt");
    if (inFile.fail()){
        cout << "Error open the input file for Games.txt... Exiting\n";
        exit(1);
    }
    string id, center, ar1, ar2;
    int dur;
    float pay;
    int i = 0;
    while (inFile >> id >> dur >> pay >> center >> ar1 >> ar2){
        games[i].ID = id;
        games[i].Duration = static_cast<GameDuration>(dur);
        games[i].setRate(pay);
        games[i].centerID = center;
        games[i].ar1ID = ar1;
        games[i].ar2ID = ar2;
        i++;
    }
    inFile.close();
}

void readRefInfo() {
    ifstream nFile("Final_Project_Referees.txt");
    if (nFile.fail()) {
        cout << "Error open the input file for Referees.txt ... Exiting\n";
        exit(1);
    }
    string gradee;
    int grade2;
    string ID, FNAME, LNAME, GAMEID;

    int i = 0;
    while (nFile >> ID >> FNAME >> LNAME >> gradee >> GAMEID) {
        refs[i].id = ID;
        refs[i].fname = FNAME;
        refs[i].lname = LNAME;
        refs[i].gameid = GAMEID;
        if (gradee == "CLUB")
            grade2 = 1;
        else if (gradee == "STATE")
            grade2 = 2;
        else if (gradee == "NATIONAL")
            grade2 = 3;
        else if (gradee == "FIFA")
            grade2 = 4;
        else
            grade2 = 0;
        refs[i].setGrade(grade2);
        i++;
        if (i >= 30) break; 
    }
    nFile.close();
}

void writeRefInfo() {
    ofstream utFile("Final_Project_Referees.txt");
    string temp, temp2;
    if (utFile.fail()) {
        cout << "Error open the output file for Referees.txt ... Exiting\n";
        std::abort;
    }
    for (int i = 0; i < 30; i++)
    {
        if (refs[i].id != "0000") {
            switch (refs[i].getGrade()) {
            case FIFA:
                temp2 = "FIFA";
                break;
            case CLUB:
                temp2 = "CLUB";
                break;
            case STATE:
                temp2 = "STATE";
                break;
            case NATIONAL:
                temp2 = "NATIONAL";
                break;
            case NINETY:
                temp2 = "NINETY";
                break;
            default:
                temp2 = "UNKNOWN";
            }

            temp = refs[i].id + space + refs[i].fname + space + refs[i].lname + space + temp2 + space + refs[i].gameid;
            utFile << temp << endl;
        }
    }
    cout << "Have a nice day! \n\n";
}

void writeGameInfo() {
    ofstream outFile("Final_Project_games.txt");
    if (outFile.fail()){
        cout << "Error open the output file for Games.txt... Exiting\n";
        std::abort;
    }
    for (int i = 0; i < 10; i++) {
        string temp;
        if (games[i].ID != "0000") {
            temp = games[i].ID + space + to_string(games[i].Duration) + space + to_string(games[i].getRate()) + space + games[i].centerID + space + games[i].ar1ID + space + games[i].ar2ID;
            outFile << temp << endl;
        }
    }
}

void listRefs() {
    refs[0].display();
    for (int i = 0; i < 30; i++) {
        refs[i].getInfo();
    }
}

void listInfoRefs() {
    string firstName, lastName;
    cout << "Enter the first name:\t";
    cin >> firstName;
    cout << "Enter the last name:\t";
    cin >> lastName;
    firstName[0] = (char)toupper(firstName[0]);
    lastName[0] = (char)toupper(lastName[0]);
    refs[0].display();
    for (int i = 0; i < 30; i++) {
        if (refs[i].fname == firstName && refs[i].lname == lastName)
            refs[i].getInfo();
    }
}

void listGradeRefs() {
    cout << "Please select the number for the referee Grade: \n";
    for (int i = 1; i < 5; i++)
        cout << "\t" << i << " --> " << RefGrade[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int selectedGrade;
    cin >> selectedGrade;
    while (selectedGrade < 1 || selectedGrade > 5)
    {
        cout << "Invalid Duration!!! Please select valid Duration:\t";
        cin >> selectedGrade;
    }
    refs[0].display();
    for (int i = 0; i < 30; i++) {
        if (refs[i].getGrade() == selectedGrade)
            refs[i].getInfo();
    }

}

void listUnassignRefs() {
    refs[0].display();
    for (int i = 0; i < 30; i++) {
        if (refs[i].gameid != "None" && refs[i].id != "None")
            refs[i].getInfo();
    }
}

void listAssignRefs() {
    refs[0].display();
    for (int i = 0; i < 30; i++) {
        if (refs[i].gameid == "None" && refs[i].id != "None")
            refs[i].getInfo();
    }
}

void addRefs() {
    int lastIndex = 0;
    while (refs[lastIndex].id != "0000") {
        lastIndex++;
    }

    string newID;
    int numRefsWithSameID = 0;
    int invalidInputCount = 0;
    do {
        cout << "Give me the ID only 4 chars:\t";
        cin >> newID;
        for (int i = 0; i < 30; i++) {
            if (refs[i].id == newID) {
                numRefsWithSameID++;
            }
        }
        if (numRefsWithSameID > 0) {
            cout << "ID already exists" << endl;
        }
        if (newID.size() != 4 || numRefsWithSameID > 0) {
            invalidInputCount++;
        }
    } while (newID.size() != 4 || numRefsWithSameID > 0 || invalidInputCount > 3);
    refs[lastIndex].id = newID;

    cout << "Please select the number for the referee Grade: \n";
    for (int i = 1; i < 5; i++) {
        cout << "\t" << i << " --> " << RefGrade[i] << endl;
    }
    cout << endl << setw(15) << "Your selection" << " --> ";
    int newGrade;
    cin >> newGrade;
    while (newGrade < 1 || newGrade > 5) {
        cout << "Invalid Grade!!! Please select valid Grade:\t";
        cin >> newGrade;
    }
    refs[lastIndex].setGrade(newGrade);

    float price;
    refs[lastIndex].gameid = "None";
    string newFirstName, newLastName;
    cout << "Enter the First Name:\t";
    cin >> newFirstName;
    cout << "Enter the Last Name:\t";
    cin >> newLastName;
    newFirstName[0] = (char)toupper(newFirstName[0]);
    newLastName[0] = (char)toupper(newLastName[0]);
    refs[lastIndex].fname = newFirstName;
    refs[lastIndex].lname = newLastName;
    refs[lastIndex].display();
    refs[lastIndex].getInfo();
}

void removeRefs() {
    string firstName;
    cout << "Please enter your first name: ";
    cin >> firstName;

    refs[0].display();

    firstName[0] = toupper(firstName[0]);

    int matchingRefsCount = 0;
    int matchingRefIndex = 0;
    for (int i = 0; refs[i].id != ""; i++) {
        if (refs[i].fname == firstName) {
            refs[i].getInfo();
            matchingRefsCount++;
            matchingRefIndex = i;
        }
    }

    switch (matchingRefsCount) {
    case 0:
        cout << firstName << " not found" << endl;
        break;
    case 1:
        refs[matchingRefIndex].id = "0000";
        refs[matchingRefIndex].fname = "0000";
        refs[matchingRefIndex].lname = "0000";
        refs[matchingRefIndex].setGrade(0);
        refs[matchingRefIndex].gameid = "None";
        break;
    default:
        string userId;
        cout << "Please enter the user's ID: ";
        cin >> userId;
        for (int t = 0; refs[t].id != ""; t++) {
            if (refs[t].id == userId) {
                refs[t].id = "0000";
                refs[t].fname = "0000";
                refs[t].lname = "0000";
                refs[t].setGrade(0);
                refs[t].gameid = "None";
            }
        }
    }


}

void listGames(){
    games[0].display();
            for (int i = 0; i < 10; i++) {
                games[i].getInfo();
            }
}

void listDurGames() {
    cout << "Please select the referee duration: \n";
    for (int i = 1; i < 6; i++) {
        cout << "\t" << i << " --> " << DurationGame[i] << endl;
    }
    cout << endl << setw(15) << "Your selection" << " --> ";
    int selectedDuration;
    cin >> selectedDuration;
    while (selectedDuration < 1 || selectedDuration > 5) {
        cout << "Invalid selection! Please choose a valid duration: ";
        cin >> selectedDuration;
    }
    int selectedDurationInMinutes = (selectedDuration * 10) + 40;
    games[0].display();
    for (int i = 0; i < 10; i++) {
        if (games[i].Duration == selectedDurationInMinutes) {
            games[i].getInfo();
        }
    }

}

void listUnassignGames() {
    games[0].display();
    for (int i = 0; i < 10; i++) {
        if (games[i].centerID != "None" && games[i].ar1ID != "None" && games[i].ar2ID != "None" && games[i].ID != "None")
            games[i].getInfo();
    }
}

void listAssignGames() {
    games[0].display();
    for (int i = 0; i < 10; i++) {
        if (games[i].centerID == "None" || games[i].ar1ID == "None" || games[i].ar2ID == "None" && games[i].ID != "None")
            games[i].getInfo();
    }
}

void addGames() {
    int last_index = 0;
    int i = 0;
    while (games[i].ID != "0000")
    {
        last_index = i;
        i++;
    }

    string game_id;
    int game_id_count = 0;
    int temp_value;
    do {
        temp_value = 0;
        cout << "Give me the ID only 5 chars: ";
        cin >> game_id;
        for (int i = 0; i < 10; i++) {
            if (games[i].ID == game_id) {
                game_id_count++;
            }
        }
        if (game_id_count > 0) {
            cout << "ID already exists" << endl;
        }
    } while (game_id.size() != 5 || temp_value > 0);
    games[last_index].ID = game_id;
    cout << "Please select the number for the referee Duration: \n";
    for (int i = 1; i < 6; i++)
        cout << "\t" << i << " --> " << DurationGame[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int duration;
    cin >> duration;
    while (duration < 1 || duration > 6)
    {
        cout << "Invalid Duration!!! Please select valid Duration: ";
        cin >> duration;
    }
    duration = (duration * 10) + 40;
    games[last_index].Duration = static_cast<GameDuration>(duration);
    float price;
    cout << "Price per minute is between $1.50 and $5.00: $";
    do {
        cin >> price;
        if (price > 5 || price < 1.5) {
            cout << "Between $1.50 and $5.00: $";
        }
    } while (price > 5 || price < 1.5);
    games[last_index].setRate(price);
    games[0].display();
    games[last_index].getInfo();
}

void removeGames() {
    string game_id;
    int game_index = -1;
    do {
        game_index = 0;
        cout << "Give me the ID only 5 chars: ";
        cin >> game_id;
        for (int i = 0; i < 30; i++) {
            if (games[i].ID == game_id) {
                game_index = i;
            }
        }
    } while (game_id.size() != 5 || game_index == -1);

    {
        games[game_index].display();
        games[game_index].getInfo();
        games[game_index].ID = "0000";
        games[game_index].Duration = ZERO;
        games[game_index].setRate(0);
        games[game_index].centerID = "None";
        games[game_index].ar1ID = "None";
        games[game_index].ar2ID = "None";
    }
}

void assignGames() {
    games[0].display();
    for (int i = 0; i < 10; i++) {
        if (games[i].centerID == "None" || games[i].ar1ID == "None" || games[i].ar2ID == "None" && games[i].ID != "None") {
            games[i].getInfo();
        }
    }
    int selectedGameIndex, randomNumber;
    string userInput;
    do {
        cout << "Pick the game id to choose from:\t";
        cin >> userInput;
        if (userInput.size() != 5) {
            selectedGameIndex = -1;
        }
        for (int i = 0; i < 30; i++) {
            if (games[i].ID == userInput) {
                selectedGameIndex = i;
            }
        }
    } while (selectedGameIndex == -1);

    int availableCenters = (games[selectedGameIndex].centerID == "None") ? 1 : 0;
    int availableAR1s = (games[selectedGameIndex].ar1ID == "None") ? 1 : 0;
    int availableAR2s = (games[selectedGameIndex].ar2ID == "None") ? 1 : 0;
    string selectedGameID = games[selectedGameIndex].ID;
    int check = 1;
    int stop = 0;
    if (availableCenters) {
        while (check) {
            randomNumber = RandomIndex();
            if (stop == 100) {
                cout << "Error no more available refs";
                break;
            }
            stop++;
            if (refs[randomNumber].gameid == "None" && refs[randomNumber].id != "0000") {
                refs[randomNumber].gameid = selectedGameID;
                games[selectedGameIndex].centerID = refs[randomNumber].id;
                check = 0;
            }
        }
    }
    check = 1;
    if (availableAR1s) {
        while (check) {
            randomNumber = RandomIndex();
            if (stop == 100) {
                cout << "Error no more available refs";
                break;
            }
            stop++;
            if (refs[randomNumber].gameid == "None" && refs[randomNumber].id != "0000") {
                refs[randomNumber].gameid = selectedGameID;
                games[selectedGameIndex].ar1ID = refs[randomNumber].id;
                check = 0;
            }
        }
    }
    check = 1;
    if (availableAR2s) {
        while (check) {
            randomNumber = RandomIndex();
            if (stop == 100) {
                cout << "Error no more available refs";
                break;
            }
            stop++;
            if (refs[randomNumber].gameid == "None" && refs[randomNumber].id != "0000") {
                refs[randomNumber].gameid = selectedGameID;
                games[selectedGameIndex].ar2ID = refs[randomNumber].id;
                check = 0;
            }
        }
    }
    games[0].display();
    games[selectedGameIndex].getInfo();
}

void calcRefsPay() {
    listRefs();
    string refID = "";
    cout << "Enter the referee ID to calculate:\t";
    cin >> refID;
    int gameIndex = -1;
    int refRole = 0; 
    for (int i = 0; i < 30; i++) {
        if (refID == games[i].centerID) {
            gameIndex = i;
            refRole = 1;
        }
        if (refID == games[i].ar1ID || refID == games[i].ar2ID) {
            gameIndex = i;
            refRole = 2;
        }
    }

    if (gameIndex == -1) {
        cout << "The referee is not assigned to any game." << endl;
        return;
    }
    int payment = games[gameIndex].Duration * games[gameIndex].getRate();
    int remainder = payment % 3;
    int paymentWithoutRemainder = payment - remainder;
    int centerRefPayment, assistantRefPayment;
    if (remainder == 1) {
        centerRefPayment = (paymentWithoutRemainder / 4) + 1;
        assistantRefPayment = paymentWithoutRemainder / 3;
    }
    else if (remainder == 2) {
        centerRefPayment = paymentWithoutRemainder / 4;
        assistantRefPayment = (paymentWithoutRemainder / 3) + 2;
    }
    else {
        assistantRefPayment = paymentWithoutRemainder / 3;
        centerRefPayment = paymentWithoutRemainder / 4;
    }
    cout << endl << "Referee Payment Breakdown..." << endl;
    if (refRole == 1) {
        cout << "Center Ref's Pay: $" << centerRefPayment << endl;
    }
    else if (refRole == 2) {
        cout << "Assistant Refs' Pay: $" << assistantRefPayment << endl << endl;
    }
}

void unassignRefs() {
    string firstName;
    string tempId;
    cout << "Enter your first name: ";
    cin >> firstName;
    firstName[0] = toupper(firstName[0]);
    refs[0].display();
    int numMatches = 0;
    int refIndex = 0;
    for (int i = 0; i < 30; i++) {
        if (refs[i].fname == firstName)
        {
            refs[i].getInfo();
            numMatches++;
            refIndex = i;
        }
    }
    cout << numMatches;
    switch (numMatches) {
    case(0):
        cout << firstName << " not found" << endl;
        break;
    case(1):
        refs[refIndex].gameid = "None";
        tempId = refs[refIndex].id;
        break;
    default:
        string id;
        cout << "Enter the ID of the user: ";
        cin >> id;
        for (int t = 0; t < 30; t++) {
            if (refs[refIndex].id == id) {
                refs[refIndex].gameid = "None";
                tempId = refs[refIndex].id;
                break;
            }
        }
    }
    for (int i = 0; i < 30; i++) {
        if (games[i].centerID == tempId) { games[i].centerID = "None"; }
        if (games[i].ar1ID == tempId) { games[i].ar1ID = "None"; }
        if (games[i].ar2ID == tempId) { games[i].ar2ID = "None"; }
    }
}

void unassignGames() {
    listGames();
    string gameId;
    int numRefs = 0;
    int gameIndex = -1;
    cout << "Choose a game ID to unassign: ";
    cin >> gameId;
    for (int i = 0; i < 30; i++) {
        if (refs[i].gameid == gameId) {
            refs[i].gameid = "None";
            numRefs++;
        }
        if (games[i].ID == gameId) {
            gameIndex = i;
        }
    }
    if (gameIndex >= 0) {
        games[gameIndex].centerID = "None";
        games[gameIndex].ar1ID = "None";
        games[gameIndex].ar2ID = "None";
    }
    else {
        cout << gameId << " does not exist" << endl;
    }
    cout << numRefs << " referees unassigned from game " << gameId << endl;
}


int main() {
    srand((unsigned)time(NULL));
    readGameInfo();
    readRefInfo();
    int option;
    do {
        system("CLS");
        cout << "             REFEREE ASSIGNING SYSTEM \n\n";
        cout << " 1.  List all referees \n";
        cout << " 2.  List information of a specific referee \n";
        cout << " 3.  List all referees of a specific grade \n";
        cout << " 4.  List all assigned referees \n";
        cout << " 5.  List all unassigned referees \n";
        cout << " 6.  Add a referee \n";
        cout << " 7.  Remove a referee \n";
        cout << " 8.  List all games \n";
        cout << " 9.  List all games of a specific duration \n";
        cout << " 10. List all unassigned games \n";
        cout << " 11. List all assigned games \n";
        cout << " 12. Add a game \n";
        cout << " 13. Remove a game \n";
        cout << " 14. Assign a game \n";
        cout << " 15. Calculate referee's payment \n";
        cout << " 16. Unassign a referee \n";
        cout << " 17. Unassign a game \n";
        cout << " 18.  Quit. \n\n";
        cout << "Please select your option:\t";
        cin >> option;
        while (option < 1 || option > 18) {
            cout << "Invalid option!!! Please select valid option:\t";
            cin >> option;
        }

        switch (option) {
        case 1:
            listRefs();
            break;
        case 2:
            listInfoRefs();
            break;
        case 3:
            listGradeRefs();
            break;
        case 4:
            listUnassignRefs();
            break;
        case 5:
            listAssignRefs();
            break;
        case 6:
            addRefs();
            break;
        case 7:
            removeRefs();
            break;
        case 8:
            listGames();
            break;
        case 9:
            listDurGames();
            break;
        case 10:
            listUnassignGames();
            break;
        case 11:
            listAssignGames();
            break;
        case 12:
            addGames();
            break;
        case 13:
            removeGames();
            break;
        case 14:
            assignGames();
            break;
        case 15:
            calcRefsPay();
            break;
        case 16:
            unassignRefs();
            break;
        case 17:
            unassignGames();
            break;
        case 18:
            writeGameInfo();
            writeRefInfo();
            exit(0);
            break;
        default:
            cout << "That was an invalid choice, please try again! \n";
        } 
        system("PAUSE");
    } while (option > 0 && option < 18);
}