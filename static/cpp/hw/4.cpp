//Filename: homework.cpp
//Programmer:  Nickolas Diaz                CSCI 123, Spring 2023
//Homework 4                                Instructor:  Timothy Mai
//Due Date: 3-5-23                         Date Submitted: 3-11-23
#include <iostream>
using namespace std;

int total(int);
double factorial(double);
int main(){
    int n;
    cout << "Please enter a positive number : ";
    cin >> n;
    cout << "The total from 1 to "<< n << " is: " << total(n) << endl;
    cout << "The factorial of " << n << " is: " << factorial(n);
}

int total(int n) {
    int t = 0;
    do 
    {
    t += n--;
    } while (n >= 0);
    return t;
}

double factorial(double n){
    double f = 1;
    while (n >= 1) {
        f = f * n--;
    }
    return f;
}