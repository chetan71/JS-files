function nthEvenFibonacci(n) {
    let a = 0,
        b = 2; // Initialize the first two even Fibonacci numbers
    const MOD = 1000000007; // Modulo value

    for (let i = 3; i <= n; i++) {
        let temp = a + b; // Calculate the next Fibonacci number
        a = b;
        b = temp;
        if (i % 3 === 0) {
            b = (b * 4) % MOD; // Multiply the third number in each triplet by 4
        }
    }

    return b;
}

// Example usage:
const n = 18;
console.log(`The ${n}th Even Fibonacci number is: ${nthEvenFibonacci(n)}`);