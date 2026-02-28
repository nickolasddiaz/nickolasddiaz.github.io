/*
* Filename: ex10_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
#include <sstream>
using namespace std;

string* stringToWords(int& count) {
    cout << "Enter a paragraph:\t";
    string paragraph;
    getline(cin, paragraph);

    stringstream ss(paragraph);
    string word;
    count = 0;
    while (ss >> word) {
        count++;
    }

    string* words = new string[count];
    ss.clear();
    ss.seekg(0);
    ss.str(paragraph); 

    int i = 0;
    while (ss >> word) {
        words[i++] = word;
    }

    return words;
}

int linearSearch(string word, string arr[], int len) {
    for (int i = 0; i < len; i++) {
        if (word == arr[i])
            return 1;
    }
    return 0;
}

int main() {
    int len = 0;
    string* paragraph = stringToWords(len);

    cout << "\nEnter a keyword: ";
    string word;
    cin >> word;
    cout << endl << linearSearch(word, paragraph, len);

    cout << "\nEnter another keyword: ";
    cin >> word;
    cout << endl << linearSearch(word, paragraph, len);

    delete[] paragraph; 
    return 0;
}
