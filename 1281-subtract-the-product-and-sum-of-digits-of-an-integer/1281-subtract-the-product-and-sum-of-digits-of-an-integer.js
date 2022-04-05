/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    let sum = 0
    let product = 1
    while(n) {
        let x = n % 10
        sum += x
        product *= x
        n = parseInt(n / 10)
    }
    return product - sum
};