//Filename: Homework7.cpp
//Programmer:  Nickolas Diaz            CSCI 123, Spring 2023
//Homework #7                           Instructor:  Timothy Mai
//Due Date: 4-7-23                      Date Submitted: 4-8-23
#include <iostream>
#include <string>
using namespace std;


void fill_array(int*& arr, int size) {
    arr = new int[size];
    int addnum;
    for (int i = 0; i < size; ++i) {
        cout << "Give me the #" << i + 1 << " number: ";
        cin >> addnum;
        arr[i] = addnum;
    }
}

int theSmallest(int a[], int number_used) {
    int small = a[0];
    for (int i = 1; i < number_used; ++i) {
        if (a[i] < small) {
            small = a[i];
        }
    }
    return small;
}


int main() {
    int* array;
    int sizeofarray;
    cout << "How many numbers to add? ";
    cin >> sizeofarray;
    fill_array(array, sizeofarray);
    int small = theSmallest(array, sizeofarray);
    cout << small;
}
