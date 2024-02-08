#include <iostream>
#include <cmath>

using namespace std;


class Kula {
  public: 
    Kula(float r) {
      this->r = r;
    };

    float obliczPolePowierzchni() {
      return 4 * M_PI * r * r;
    };

  private: 
    float r; 
};

int main() {
  float r;
  cout << "Podaj promien: ";
  cin >> r;



  Kula kula(r);

  cout << "\nPole powierzchni kuli: " << kula.obliczPolePowierzchni();


  
  
  return 0;
}