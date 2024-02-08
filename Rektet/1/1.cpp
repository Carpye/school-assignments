#include <iostream>

using namespace std;


class Prostopadloscian {
  public: 
    Prostopadloscian(float a, float b, float c) {
      this->a = a;
      this->b = b;
      this->c = c;
    };

    float obliczPole() {
      return 2 * a * b + 2 * a * c + 2 * c * b;
    };

  private: 
    float a, b, c; 
};

int main() {
  float a, b, c;
  cout << "Podaj wartosci: ";
  cin >> a >> b >> c;



  Prostopadloscian prostopadloscian(a, b, c);

  cout << "\nPole powierzchni prostopadloscianu: " << prostopadloscian.obliczPole();


  
  
  return 0;
}