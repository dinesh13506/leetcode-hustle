/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let runningSum = []
    let sum = 0
    for(let num of nums) {
        sum = sum + num
        runningSum.push(sum)
    }
    return runningSum
};