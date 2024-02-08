#include <iostream>
#include <cmath>

using namespace std;


class Kula {
  public: 
    Kula(float r) {
      this->r = r;
    };

    float obliczObjetosc() {
      return 4/3 * M_PI * r * r * r;
    };

  private: 
    float r; 
};

int main() {
  float r;
  cout << "Podaj promien: ";
  cin >> r;



  Kula kula(r);

  cout << "\nObjetosc kuli: " << kula.obliczObjetosc();


  
  
  return 0;
}