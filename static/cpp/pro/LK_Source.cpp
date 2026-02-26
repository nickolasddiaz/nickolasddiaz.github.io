//Filename: Source.cpp
//Programmer:  Nickolas Diaz                    CSCI 123, Spring 2023
//Project 5x                                    Instructor:  Timothy Mai
//Due Date: 5-12-23                              Date Submitted: 5-13-23
//Program Description: Referee and Game Database with linked list and input file
#include "Final_Project_LK_Game.h"
#include "Final_Project_LK_CReferee.h"
#include <string>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <time.h>
using namespace std;

string DurationGame[6] = { "ZERO", "FIFTY", "SIXTY", "SEVENTY", "EIGHTTY", "NINETY" };
string RefGrade[5] = { "UNKNOWN", "CLUB", "STATE", "NATIONAL", "FIFA" };
string space = "                  ";
GameNode* head = NULL;
GameNode* newNode = new GameNode();

RefNode* heads = NULL;
RefNode* newNodes = new RefNode();


int RandomIndex(int i){
    int randNum = rand();
    randNum %= i;
    return randNum;
}

void readGameInfo() {
    ifstream inFile("Final_Project_LK_games.txt");
    if (inFile.fail()){
        cout << "Error open the input file for Games.txt... Exiting\n";
        exit(1);
    }
    string id, center, ar1, ar2;
    int dur;
    float pay;
    while (inFile >> id >> dur >> pay >> center >> ar1 >> ar2){

        newNode = new GameNode();
        newNode->data = new CGame(id, dur, pay, center, ar1, ar2);
        newNode->next = head;
        head = newNode;
    }
    GameNode* temp = NULL;
    GameNode* prev = NULL;
    GameNode* current = head;
    while (current != NULL) {
        temp = current->next;
        current->next = prev;
        prev = current;
        current = temp;
    }
    head = prev;


    inFile.close();
}

void readRefInfo() {
    ifstream nFile("Final_Project_LK_Referees.txt");
    if (nFile.fail()) {
        cout << "Error open the input file for Referees.txt ... Exiting\n";
        exit(1);
    }
    string gradee;
    int grade2;
    string ID, FNAME, LNAME, GAMEID;

    while (nFile >> ID >> FNAME >> LNAME >> gradee >> GAMEID) {

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

        newNodes = new RefNode();
        newNodes->datas = new CReferee(ID, FNAME, LNAME, grade2, GAMEID);
        newNodes->nexts = heads;
        heads = newNodes;
    }

    RefNode* temp = NULL;
    RefNode* prev = NULL;
    RefNode* current = heads;
    while (current != NULL) {
        temp = current->nexts;
        current->nexts = prev;
        prev = current;
        current = temp;
    }
    heads = prev;

    nFile.close();
}

void writeRefInfo() {
    ofstream utFile("Final_Project_LK_Referees.txt");
    string tem, temp2;
    if (utFile.fail()) {
        cout << "Error open the output file for Referees.txt ... Exiting\n";
        std::abort();
    }



    RefNode* tempNodes = heads;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (ref->id != "0000") {
            switch (ref->getGrade())
            {
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
            tem = ref->id + space + ref->fname + space + ref->lname + space + temp2 + space + ref->gameid;
            utFile << tem << endl;
        }
        tempNodes = tempNodes->nexts;
    }
    cout << "Have a nice day! \n\n";
}

void writeGameInfo() {
    string tem;
    ofstream outFile("Final_Project_LK_games.txt");
    if (outFile.fail()){
        cout << "Error open the output file for Games.txt... Exiting\n";
        std::abort;
    }
    GameNode* tempNodes = head;
    while (tempNodes != NULL) {
        CGame* game = tempNodes->data;
        if (game->ID != "0000") {
            tem = game->ID + space + to_string(game->Duration) + space + to_string(game->getRate()) + space + game->centerID + space + game->ar1ID + space + game->ar2ID;
            outFile << tem << endl;
        }
        tempNodes = tempNodes->next;
    }
    
}

void listRefs() {
    RefNode* tempNodes = heads;
    int displaynumber = 1;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (displaynumber) 
            ref->display();
        ref->getInfo();
        tempNodes = tempNodes->nexts;
        displaynumber = 0;
    }
    delete tempNodes;
}

void listInfoRefs() {
    string firstName, lastName;
    cout << "Enter the first name:\t";
    cin >> firstName;
    cout << "Enter the last name:\t";
    cin >> lastName;
    firstName[0] = (char)toupper(firstName[0]);
    lastName[0] = (char)toupper(lastName[0]);

    RefNode* tempNodes = heads;
    int displaynumber = 1;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (displaynumber) 
            ref->display();
        if (ref->fname == firstName && ref->lname == lastName)
            ref->getInfo();
        tempNodes = tempNodes->nexts;
        displaynumber = 0;
    }
    delete tempNodes;
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

    RefNode* tempNodes = heads;
    int displaynumber = 1;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (displaynumber)
            ref->display();
        if (ref->getGrade() == selectedGrade)
            ref->getInfo();
        tempNodes = tempNodes->nexts;
        displaynumber = 0;
    }
    delete tempNodes;

}

void listUnassignRefs() {
    RefNode* tempNodes = heads;
    int displaynumber = 1;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (displaynumber)
            ref->display();
        if(ref->gameid != "None" && ref->id != "None")
        ref->getInfo();
        tempNodes = tempNodes->nexts;
        displaynumber = 0;
    }
    delete tempNodes;
}

void listAssignRefs() {
    RefNode* tempNodes = heads;
    int displaynumber = 1;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (displaynumber)
            ref->display();
        if (ref->gameid == "None" && ref->id != "None")
            ref->getInfo();
        tempNodes = tempNodes->nexts;
        displaynumber = 0;
    }
    delete tempNodes;
}

void addRefs() {
    string refs_id, tempFirstName, tempLastName;
    int refs_id_count = 0;
    do {
        cout << "Give me the ID only 4 chars: ";
        cin >> refs_id;
        refs_id_count = 0;
        RefNode* tempNodes = heads;
        while (tempNodes != NULL) {
            CReferee* game = tempNodes->datas;
            if (game->id == refs_id) {
                refs_id_count++;
            }
            tempNodes = tempNodes->nexts;
        }
        if (refs_id_count > 0) {
            cout << "ID already exists" << endl;
        }
    } while (refs_id.size() != 4 || refs_id_count > 0  );
    cout << "Please select the number for the referee rating: \n";
    for (int i = 1; i < 5; i++)
        cout << "\t" << i << " --> " << RefGrade[i] << endl;
    cout << endl << setw(15) << "Your selection" << " --> ";
    int ratings;
    cin >> ratings;
    while (ratings < 1 || ratings > 5)
    {
        cout << "Invalid Rating!!! Please select valid rating: ";
        cin >> ratings;
    }
    cout << "Enter the first name";
    cin >> tempFirstName;
    cout << "Enter the last name";
    cin >> tempLastName;
    tempFirstName[0] = toupper(tempFirstName[0]);
    tempLastName[0] = toupper(tempLastName[0]);

    RefNode* newNodes = new RefNode();
    newNodes->datas = new CReferee(refs_id, tempFirstName, tempLastName, ratings, "None");
    newNodes->nexts = NULL;
    if (head == NULL) {
        heads = newNodes;

    }
    else {
        RefNode* tempNodes = heads;
        while (tempNodes->nexts != NULL) {
            tempNodes = tempNodes->nexts;
        }
        tempNodes->nexts = newNodes;
    }
}

void removeRefs() {
    string tempFirstName, tempid;
    cout << "Enter the first name";
    cin >> tempFirstName;
    

    if (head == NULL) {
        cout << "The list is empty.\n";
        return;
    }
    int displaynumber = 1;
    int countHowManyNames = 0;
    RefNode* tempNodess = heads;
    while (tempNodess != NULL) {
        CReferee* ref = tempNodess->datas;
        if (tempFirstName == ref->fname) {
            if (displaynumber)
                ref->display();
            countHowManyNames++;
            tempid = ref->id;
            ref->getInfo();
            displaynumber = 0;
        }
        tempNodess = tempNodess->nexts;
    }
    delete tempNodess;
    if (countHowManyNames == 0) {
        cout << tempFirstName <<" does not exist";
        return;
    }
    else if (countHowManyNames >= 2) {
        cout << "Give me the id of the name";
        cin >> tempid;
    }


    RefNode* tempNodes = heads;
    RefNode* befores = NULL;
    CReferee* ref = NULL;
    int found = 0;

    while (tempNodes != NULL) {
        ref = tempNodes->datas;
        if (ref->id == tempid) {
            found = 1;
            GameNode* tempNode = head;
            while (tempNode != NULL) {
                CGame* game = tempNode->data;
                if (game->centerID == ref->id)
                    game->centerID = "None";
                if (game->ar1ID == ref->id)
                    game->ar1ID = "None";
                if (game->ar2ID == ref->id)
                    game->ar2ID = "None";
                tempNode = tempNode->next;
            }
            delete tempNode;


            break;
        }
        befores = tempNodes;
        tempNodes = tempNodes->nexts;
    }

    if (!(found)) {
        cout << tempFirstName << " is not in the list.\n";
        return;
    }

    if (befores == NULL) {
        heads = tempNodes->nexts;
    }
    else {
        befores->nexts = tempNodes->nexts;
    }
    delete ref;
    delete tempNodes;


}

void listGames(){
    GameNode* tempNode = head;
    int displaynumber = 1;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (displaynumber) 
            game->display();
        game->getInfo();
        tempNode = tempNode->next;
        displaynumber = 0;
    }
    delete tempNode;
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
    GameNode* tempNode = head;
    int displaynumber = 1;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (displaynumber) {
            game->display();
        }
        if(game->Duration == selectedDurationInMinutes)
            game->getInfo();
        tempNode = tempNode->next;
        displaynumber = 0;
    }
    delete tempNode;
}

void listAssignGames() {
    GameNode* tempNode = head;
    int displaynumber = 1;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (displaynumber) {
            game->display();
        }
        if (game->centerID != "None" && game->ar1ID != "None" && game->ar2ID != "None" && game->ID != "None")
            game->getInfo();
        tempNode = tempNode->next;
        displaynumber = 0;
    }
    delete tempNode;
}

void listUnassignGames() {
    GameNode* tempNode = head;
    int displaynumber = 1;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (displaynumber) {
            game->display();
        }
        if (game->centerID == "None" || game->ar1ID == "None" || game->ar2ID == "None" && game->ID != "None")
            game->getInfo();
        tempNode = tempNode->next;
        displaynumber = 0;
    }
    delete tempNode;
}

void addGames() {
    string game_id;
    int game_id_count = 0;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> game_id;
        game_id_count = 0;
        GameNode* tempNode = head;
        while (tempNode != NULL) {
            CGame* game = tempNode->data;
            if (game->ID.substr(1, 5) == game_id.substr(1, 5)) {
                game_id_count++;
            }
            tempNode = tempNode->next;
        }
        if (!game_id.substr(1, 5).find_first_not_of("0123456789"))
            cout << "Id needs to be a number" << endl;
        if (game_id_count > 0) {
            cout << "ID already exists" << endl;
        }
    } while (game_id.size() != 5 || game_id_count > 0 || !game_id.substr(1, 5).find_first_not_of("0123456789"));
    cout << "Please select the number for the Game Duration: \n";
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
    float price;
    cout << "Price per minute is between $1.50 and $5.00: $";
    do {
        cin >> price;
        if (price > 5 || price < 1.5) {
            cout << "Between $1.50 and $5.00: $";
        }
    } while (price > 5 || price < 1.5);


    GameNode* newNode = new GameNode();
    newNode->data = new CGame(game_id, duration, price, "None", "None", "None");
    newNode->next = NULL;
    if (head == NULL) {
        head = newNode;

    }
    else {
        GameNode* tempNode = head;
        while (tempNode->next != NULL) {
            tempNode = tempNode->next;
        }
        tempNode->next = newNode;
    }
}

void removeGames() {
    string game_id;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> game_id;
    } while (game_id.size() != 5);

    if (head == NULL) {
        cout << "The list is empty.\n";
        return;
    }

    GameNode* tempNode = head;
    GameNode* before = NULL;
    CGame* game = NULL;
    int found = 0;

    while (tempNode != NULL) {
        game = tempNode->data;
        if (game->ID == game_id) {
            found = 1;
            game->display();
            game->getInfo();

            RefNode* tempNodes = heads;
            while (tempNodes != NULL) {
                CReferee* ref = tempNodes->datas;
                if (game_id == ref->gameid)
                    ref->gameid = "None";
                tempNodes = tempNodes->nexts;
            }
            delete tempNodes;
            break;
        }
        before = tempNode;
        tempNode = tempNode->next;
    }

    if (!(found)) {
        cout << game_id << " is not in the list.\n";
        return;
    }

    if (before == NULL) {
        head = tempNode->next;
    }
    else {
        before->next = tempNode->next;
    }
    delete game;
    delete tempNode;
}

void assignGames() {
    GameNode* tempNode = head;
    int displaynumber = 1;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if(displaynumber){
            game->display();
        }
        if (game->centerID == "None" || game->ar1ID == "None" || game->ar2ID == "None" && game->ID != "None") {
            game->getInfo();
        }
        tempNode = tempNode->next;
        displaynumber = 0;
    }
    delete tempNode;

    int lengthOfList = 0;
    RefNode* tempNodes = heads;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        lengthOfList++;
        tempNodes = tempNodes->nexts;
    }
    delete tempNodes;

    int randomNumber, availableCenters, availableAR1s, availableAR2s;
    string userInput, selectedGameID;
    string game_id;
    do {
        cout << "Give me the ID only 5 chars: ";
        cin >> game_id;
    } while (game_id.size() != 5);

    GameNode* tempNoded = head;
    while (tempNoded != NULL) {
        CGame* game = tempNoded->data;
        if (game->ID == game_id) {
            availableCenters = (game->centerID == "None") ? 1 : 0;
            availableAR1s = (game->ar1ID == "None") ? 1 : 0;
            availableAR2s = (game->ar2ID == "None") ? 1 : 0;
            selectedGameID = game->ID;

            int check = 1;
            int stop = 0;
            int checkrandomNumber = 0;
            if (availableCenters) {
                while (check) {
                    randomNumber = RandomIndex(lengthOfList);
                    if (stop == 1000) {
                        cout << "Error no more available refs";
                        break;
                    }
                    stop++;
                    checkrandomNumber = 0;
                    RefNode* tempNodes = heads;
                    while (tempNodes != NULL) {
                        CReferee* refs = tempNodes->datas;
                        if (refs->gameid == "None" && checkrandomNumber == randomNumber) {
                            refs->gameid = selectedGameID;
                            game->centerID = refs->id;
                            check = 0;
                        }
                        tempNodes = tempNodes->nexts;
                        checkrandomNumber++;
                    }
                    delete tempNodes;

                }
            }
            check = 1;
            checkrandomNumber = 0;
            if (availableAR1s) {
                while (check) {
                    randomNumber = RandomIndex(lengthOfList);
                    if (stop == 1000) {
                        cout << "Error no more available refs";
                        break;
                    }
                    stop++;
                    checkrandomNumber = 0;
                    RefNode* tempNodes = heads;
                    while (tempNodes != NULL) {
                        CReferee* refs = tempNodes->datas;
                        if (refs->gameid == "None" && checkrandomNumber == randomNumber) {
                            refs->gameid = selectedGameID;
                            game->ar1ID = refs->id;
                            check = 0;
                        }
                        tempNodes = tempNodes->nexts;
                        checkrandomNumber++;
                    }
                    delete tempNodes;
                }
            }
            check = 1;
            checkrandomNumber = 0;
            if (availableAR2s) {
                while (check) {
                    randomNumber = RandomIndex(lengthOfList);
                    if (stop == 1000) {
                        cout << "Error no more available refs";
                        break;
                    }
                    stop++;
                    checkrandomNumber = 0;
                    RefNode* tempNodes = heads;
                    while (tempNodes != NULL) {
                        CReferee* refs = tempNodes->datas;
                        if (refs->gameid == "None" && checkrandomNumber == randomNumber) {
                            refs->gameid = selectedGameID;
                            game->ar2ID = refs->id;
                            check = 0;
                        }
                        tempNodes = tempNodes->nexts;
                        checkrandomNumber++;
                    }
                    delete tempNodes;
                }
            }
            game->display();
            game->getInfo();
            return;
        }
        tempNoded = tempNoded->next;
    } 
}

void calcRefsPay() {
    int payment, remainder, centerRefPayment, assistantRefPayment;
    string refID = "";
    refID = "";
    listRefs();
    cout << "Enter the referee ID to calculate:\t";
    cin >> refID;
    int refRole = 0;
    GameNode* tempNode = head;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (refID == game->ar1ID || refID == game->ar2ID) {
            refRole = 2;
            payment = game->Duration * game->getRate();
        }
        if (refID == game->centerID) {
            refRole = 1;
            payment = game->Duration * game->getRate();
        }

        tempNode = tempNode->next;
    }
    if (!(refRole)) {
        cout << "The referee is not assigned to any game." << endl;
        return;
    }
    remainder = payment % 3;
    centerRefPayment = payment * .4;
    assistantRefPayment = payment * .3;

    if (remainder == 1) {
        centerRefPayment += 1;
    }
    else if (remainder == 2) {
        centerRefPayment -= 1;
        assistantRefPayment += 2;
    }

    cout << endl << "Referee Payment Breakdown..." << endl;
    if (refRole == 1) {
        cout << "Center Ref's Pay: $" << centerRefPayment << endl;
    }
    else if (refRole == 2) {
        cout << "Assistant Refs' Pay: $" << assistantRefPayment << endl << endl;
    }
    delete tempNode;
}

void unassignRefs() {
    string firstName;
    string tempId;
    cout << "Enter your first name: ";
    cin >> firstName;
    firstName[0] = toupper(firstName[0]);
    int numMatches = 0;
    int refIndex = 0;

    RefNode* tempNodes = heads;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (ref->fname == firstName) {
            ref->display();
            ref->getInfo();
            numMatches++;
            tempId = ref->id;
            ref->gameid = "None";
            break;
        }
        tempNodes = tempNodes->nexts;
    }

    if (numMatches == 0) {
        cout << firstName << " not found" << endl;
        return;
    }

    GameNode* tempNode = head;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (game->centerID == tempId) {
            game->centerID = "None";
        }
        if (game->ar1ID == tempId) {
            game->ar1ID = "None";
        }
        if (game->ar2ID == tempId) {
            game->ar2ID = "None";
        }
        tempNode = tempNode->next;
    }
}

void unassignGames() {
    listGames();
    string gameId;
    int numRefs = 0;
    int gameIndex = -1;
    cout << "Choose a game ID to unassign: ";
    cin >> gameId;



    RefNode* tempNodes = heads;
    while (tempNodes != NULL) {
        CReferee* ref = tempNodes->datas;
        if (ref->gameid == gameId) {
            ref->gameid = "None";
            numRefs++;
        }
        ref->getInfo();
        tempNodes = tempNodes->nexts;
    }

    delete tempNodes;

    GameNode* tempNode = head;
    while (tempNode != NULL) {
        CGame* game = tempNode->data;
        if (game->ID == gameId) {
            game->getInfo();
            game->centerID = "None";
            game->ar1ID = "None";
            game->ar2ID = "None";
            cout << numRefs << " referees unassigned from game " << gameId << endl;
            return;
        }
        tempNode = tempNode->next;
    }    
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