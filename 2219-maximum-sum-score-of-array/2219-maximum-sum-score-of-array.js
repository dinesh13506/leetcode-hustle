/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSumScore = function(nums) {
    
    let total = 0, n = nums.length
    for(let num of nums) {
        total += num
    }
    
    let max = -Infinity, curr = 0
    for(let i = 0; i < n; i++) {
        curr = curr + nums[i]
        max = Math.max( max, Math.max(curr, total - curr + nums[i]))
    }
    return max
};