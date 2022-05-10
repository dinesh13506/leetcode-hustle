/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let totalSum = 0 
    for(let num of nums) {
        totalSum += num
    }
    
    if( (totalSum & 1) == 1) {
        return false
    }
    
    let target = totalSum/2
    let n = nums.length
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(target+1)
        dp[i].fill(-1)
    }
    
    for(let i = 0; i < n; i++) {
        dp[i][0] = true
    }
    
    if(nums[0] == target) {
        dp[0][target] = true
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 1; j <= target; j++) {
            if( i == 0) {
                dp[i][j] = (j == nums[i])
                continue
            }
            let nottake = dp[i-1][j]
            let take = false
            if(nums[i] <= j) {
                take = dp[i-1][j-nums[i]]
            }
            dp[i][j] = take || nottake
        }
    }
    return dp[n-1][target]
    
    
};