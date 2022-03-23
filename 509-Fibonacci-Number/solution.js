/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    
    let fibNumbers = new Array(n+1)
    fibNumbers[0] = 0
    fibNumbers[1] = 1
    for(let i = 2; i <= n ;i++) {
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2]
    }
    return fibNumbers[n]
};