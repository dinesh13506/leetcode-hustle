/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    
    let tribonacciNumbers = new Array(n+1)
    tribonacciNumbers[0] = 0
    tribonacciNumbers[1] = 1
    tribonacciNumbers[2] = 1
    
    for(let i = 3; i<=n ;i++) {
        tribonacciNumbers[i] = tribonacciNumbers[i-1] + tribonacciNumbers[i-2] + tribonacciNumbers[i-3]
    }
    return tribonacciNumbers[n]
};