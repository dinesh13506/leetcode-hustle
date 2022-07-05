/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let sumOfSquares = (x) => {
        let sum = 0
        while(x > 0) {
            let d = x % 10
            sum += (d * d)
            x = parseInt(x/10)
        }
        return sum
    }
    
    let seen = new Set()
    if(n == 1) return true
    while(n > 1) {
        let sum = sumOfSquares(n)
        if(sum == 1) return true
        if(seen.has(sum)) {
            return false
        } else {
            seen.add(sum)
        }
        n = sum
    }
    return false
};