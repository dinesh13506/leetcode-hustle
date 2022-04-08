/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let orig = num, sum = 0
    while(num) {
        sum += (num%10)
        num = parseInt(num/10)
    }
    return (sum&1) == 0 ?  parseInt(orig / 2) : parseInt((orig-1)/2)
};