/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum = nums.reduce((a,b) => { return a + b} ,0)
    if(sum % 2 != 0) {
        return false
    }
    
    sum = sum / 2
    let n = nums.length - 1
    
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(sum+1)
        memo[i].fill(-1)
    }
    
    let dp = (index, target) => {
        if(index < 0) {
            return false
        }
        if(target == 0) {
            return true
        }
        if(index == 0 && nums[index] == target) {
            return true
        }
        if(memo[index][target] != -1) {
            return memo[index][target]
        }
        let nottake = dp(index-1, target)
        let take = false
        if(target >= nums[index]) {
            take = dp(index - 1, target - nums[index])
        }
        memo[index][target] =  take || nottake
        return memo[index][target]
    }
    
    return dp(n-1, sum)
};