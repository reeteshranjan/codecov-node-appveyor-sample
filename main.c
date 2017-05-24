#include <stdio.h>
extern int f1(int);
extern int f2(int);
int main() {
  printf("%d", f2(f1(3)));
  return 0;
}
