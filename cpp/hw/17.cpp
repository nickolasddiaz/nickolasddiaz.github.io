//Filename: Homework17.cpp
//Programmer:  Nickolas Diaz            CSCI 123, Spring 2023
//Homework #17                           Instructor:  Timothy Mai
//Due Date: 5-6-23                      Date Submitted: 4-30-23
#include <iostream>
#include <string>
using namespace std;

template <class T>
void fill_array(T*& arr, int size) {
    arr = new T[size];
    T addnum;
    for (int i = 0; i < size; ++i) {
        cout << "Give me the #" << i + 1 << " number: ";
        cin >> addnum;
        arr[i] = addnum;
    }}



template <class T>
T theSmallest(T a[], int number_used) {
    T small = a[0];
    for (int i = 1; i < number_used; ++i) {
        if (a[i] < small) {
            small = a[i];
        }
    }
    return small;
}


int main() {
    int* int_array;
    int int_size;
    cout << "How many integers to add? ";
    cin >> int_size;
    fill_array(int_array, int_size);
    int smallest_int = theSmallest(int_array, int_size);
    cout << "Smallest integer: " << smallest_int << endl;

    float* float_array;
    int float_size;
    cout << "How many floats to add? ";
    cin >> float_size;
    fill_array(float_array, float_size);
    float smallest_float = theSmallest(float_array, float_size);
    cout << "Smallest float: " << smallest_float << endl;

    char* char_array;
    int char_size;
    cout << "How many characters to add? ";
    cin >> char_size;
    fill_array(char_array, char_size);
    char smallest_char = theSmallest(char_array, char_size);
    cout << "Smallest char: " << smallest_char << endl;
}
