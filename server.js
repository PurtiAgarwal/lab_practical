
#include <stdio.h>
int main() {

    int n;
    scanf("%d", n);
    int fac = 1;
    for(int i=0;i<=n;i++)
        fac *= i;

    printf("%d", fac);
    return 0;
}