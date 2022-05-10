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
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(target+1)
        memo[i].fill(-1)
    }
    
    let dp = function(index, target) {
        
        if(target === 0) {
            return true
        }
        if(index == 0) {
            return nums[0] === target
        }
        
        if(memo[index][target] != -1) {
            return memo[index][target]
        }
        let nottake = dp(index-1, target)
        let take = false
        if(nums[index] <= target) {
            take = dp(index - 1, target - nums[index])
        }
        memo[index][target] = take || nottake
        return memo[index][target]
    }
    
   
    return dp(n-1, target)
    
};