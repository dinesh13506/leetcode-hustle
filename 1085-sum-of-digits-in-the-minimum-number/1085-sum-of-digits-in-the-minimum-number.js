/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    let min = Math.min(...nums)
    console.log
    let sum = 0
    while(min) {
        sum += min%10
        min = parseInt(min/10)
    }
    return (sum%2 == 0) ? 1 : 0
};