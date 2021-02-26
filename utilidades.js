function factorial (n) {
    let total = 1; 
    for (let i = 1; i <= n; i++) {
        total = total * i; 
    }
    return total; 
}
function permutation (n, k) {
    let total = factorial(n) / factorial((n - k));
    return total;
}
function getRandomNumber() {
    let min = 0;
    let max = 100;
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    factorial,
    permutation,
    getRandomNumber
};


