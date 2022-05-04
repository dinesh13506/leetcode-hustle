/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let prev2 = 0, prev = 1
    for(let i = 2; i <=n ; i++) {
        let curri = prev2 + prev
        prev2 = prev
        prev = curri
    }
    return n == 0 ? prev2 : prev
};