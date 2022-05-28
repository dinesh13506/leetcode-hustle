/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n = nums.length
    let expectedSum = (n * ( n + 1) ) / 2
    let sum = 0
    for(let num of nums) {
        sum += num
    }
    return expectedSum - sum
};