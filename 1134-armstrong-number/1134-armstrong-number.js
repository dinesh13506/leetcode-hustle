/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
   
    let k = 0
    let digits = []
    let input = n
    while(n) {
        digits.push(n%10)
        n = parseInt(n/10)
        k++
    }
    
    let sum = 0
    for(let d of digits) {
        sum = sum + (Math.pow(d,k))
    }
    return sum == input
    
};