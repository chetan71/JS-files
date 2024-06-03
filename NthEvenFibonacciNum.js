function NthEvenFibonacci(n) {
    //Write your code here
    if (n < 1)
        return n;
    if (n == 1)
        return 2;
    return ((4 * NthEvenFibonacci(n - 1)) % 1000000007 + NthEvenFibonacci(n - 2) % 1000000007) % 1000000007;
}