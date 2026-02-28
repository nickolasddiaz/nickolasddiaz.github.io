//Filename: homework#3.cpp

//Programmer:  Nickolas Diaz       CSCI 123, Spring 2023

//Homework #3                      Instructor:  Timothy Mai

//Due Date: 03/04                  Date Submitted: 03/04

//Program Description:
//Write a small program to output even numbers from 2 to 10 three times.
#include <iostream>
using namespace std;

int main() {
	for (int i = 1; i <= 3; i++) {
		cout << endl << "Run# " << i << ": ";
		for (int o = 2; o <= 10; o += 2) {
			cout << o << " ";
		}
	}
}