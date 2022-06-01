/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let n = nums.length
    let runningSum = new Array(n)
    let sum = 0
    for(let i = 0; i < n; i++) {
        sum += nums[i]
        runningSum[i] = sum
    }
    return runningSum
};