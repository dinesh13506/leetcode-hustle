/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0
    for(let i = 1; i <= num; i++) {
        let x = i
        let sum = 0
        while(x) {
            sum += (x%10)
            x = parseInt(x/10)
        }
        if( (sum&1) == 0) {
            count++
        }
    }
    return count
};