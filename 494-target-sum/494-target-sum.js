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
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Map()
    }
    
    let dp = function(index, target) {
        
        if(index == 0) {
            if(target == 0 && nums[0] == 0) {
                return 2
            }
            if(target == 0) {
                return 1
            }
            
            if(target == nums[0]) {
                return 1
            } else {
                return 0
            }
            
        }
        
        if(memo[index].has(target)) {
            return memo[index].get(target)
        }
        
        let nottake = dp(index-1, target)
        let take = 0
        if(nums[index] <= target) {
            take = dp(index-1, target-nums[index])
        }
        memo[index].set(target, take + nottake)
        return memo[index].get(target)
    }
    
    return dp(n-1, newTarget)
};