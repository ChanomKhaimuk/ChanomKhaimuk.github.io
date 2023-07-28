let text = null;
let num = null;
let counter = 0;
const primeNum = [];

while (true) {
    text = prompt("Enter the positive integer.");
    num = Number(text);
    if (isNaN(num) || num < 1) {
        continue;
    } else {
        showPrimes(num);
    }
    break;
}

function isPrime(n) {
    for (let i =2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        primeNum[counter] = i;
        counter++
    }
    alert(`For n = ${n} prime numbers are ${primeNum}`)
}
