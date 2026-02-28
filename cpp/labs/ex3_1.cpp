/*
* Filename: ex3_1.cpp
* Programmer: Nickolas Diaz
*/
#include <iostream>
using namespace std;
struct Model{
int age;
char firstname[25];
string lastname;
char gender;
};
void printmodel(Model m0){
cout << m0.age << ' ';
printf("%s", m0.firstname);
cout << " " << m0.lastname << " " << m0.gender << "\n";
};

int main(){
Model m1 = {27, {'T','y','r','a'},"Banks",'F'};
Model m2 = {35, {'D','a','v','i','d'},"Gandy",'M'};
Model m3 = {24, {'M','i','r','a','n','d','a'},"Kerr",'F'};
printmodel(m1);
printmodel(m2);
printmodel(m3);



return 0;
}