#include <iostream>
using namespace std;
template <class T>
class MATH
{
private:
 T t1, t2;
public:
 MATH(T n1, T n2)
 {
 t1 = n1;
 t2 = n2;
 }
 T add() { return t1 + t2; }
 T sub() { return t1 - t2; }
 T mul() { return t1 * t2; }
 T div() { return (double) t1 / (double) t2; }
};
int main()
{
MATH<int> m1(12, 21);
cout << m1.add() << endl;
cout << m1.sub() << endl;
cout << m1.mul() << endl;
cout << m1.div() << endl;
MATH<float> m2(12.7, 21.4);
cout << m2.add() << endl;
cout << m2.sub() << endl;
cout << m2.mul() << endl;
cout << m2.div() << endl;
return 0;
}