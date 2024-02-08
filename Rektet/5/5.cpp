#include <iostream>
#include <cmath>

using namespace std;


class Walec {
  public: 
    Walec(float r, float l) {
      this->r = r;
      this->l = l;
    };

    float obliczPolePowierzchni() {
      return M_PI * r * r * 2 + 2 * M_PI * r * l;
    };

  private: 
    float r; 
    float l; 
};

int main() {
  float r;
  float l;
  cout << "Podaj promien i wysokosc: ";
  cin >> r >> l;



  Walec walec(r, l);

  cout << "\nPole powierzchni walca: " << walec.obliczPolePowierzchni();


  
  
  return 0;
}