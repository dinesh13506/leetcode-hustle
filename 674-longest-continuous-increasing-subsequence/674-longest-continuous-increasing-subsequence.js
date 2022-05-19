/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    
    let n = nums.length
    let dp = new Array(n)
    dp.fill(1)
    
    for(let i = 1; i < n; i++) {
        let prev = i - 1
        if(nums[i] > nums[prev]) {
            dp[i] = dp[prev] + 1
        }
    }
    
    let ans = 0
    for(let i = 0 ; i < n; i++) {
        ans = Math.max(ans,dp[i])
    }
    return ans
};