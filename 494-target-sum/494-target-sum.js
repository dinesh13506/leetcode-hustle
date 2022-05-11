/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let n = nums.length
    let total = 0
    for(let num of nums) {
        total = total + num
    }
    
    let s2 = (total - target)
    if(s2 % 2 != 0) {
        return 0
    }
    
    let newTarget = s2 / 2
    
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Map()
    }
    
    for(let j = 0; j <= newTarget; j++) {
        if(j == 0 && nums[0] == 0) {
            dp[0].set(j,2)
            continue
        }
        if(j == 0) {
            dp[0].set(j,1)
            continue
        }
        if( j == nums[0]) {
            dp[0].set(j,1)
            continue
        } else {
            dp[0].set(j,0)
            continue
        }
    }
    
    for(let i = 1; i < n; i++) {
        for(let j = 0; j <= newTarget; j++) {
            let notake = dp[i-1].get(j) || 0
            let take= 0 
            if(nums[i] <= j) {
                take = dp[i-1].get(j - nums[i]) || 0
            }
            dp[i].set(j,take + notake)
        }
    }
    
    return dp[n-1].get(newTarget) || 0
    
    
};