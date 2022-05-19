/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    
    let n = nums.length
    let dp = new Array(n)
    dp.fill(1)
    let count = new Array(n)
    count.fill(1)
    
    for(let i = 0; i < n; i++) {
        for(let prev = 0; prev < i; prev++) {
            if(nums[i] > nums[prev]) {
                if(dp[i] === dp[prev] + 1) {
                    count[i] = count[prev] + count[i]
                }
                if(dp[i] < dp[prev] + 1) {
                    dp[i] = dp[prev] + 1
                    count[i] = count[prev]
                }
            }
        }
    }
    
    let maxLen = 0
    let maxCount = 0
    for(let i = 0; i < n; i++) {
        if(maxLen < dp[i]) {
            maxLen = dp[i]
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(maxLen  === dp[i]) {
            maxCount = maxCount + count[i]
        }
    }
    
    //console.log(dp, count)
    return maxCount
};