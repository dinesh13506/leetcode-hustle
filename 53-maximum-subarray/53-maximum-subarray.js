/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    const n = nums.length;
    let curSum = 0, maxSum = -Infinity;
    for(let i = 0; i < n; i++) {
        curSum += nums[i];
        maxSum = Math.max(curSum, maxSum);
        if(curSum < 0) {
            curSum = 0;
        }
    }
    return maxSum;
};