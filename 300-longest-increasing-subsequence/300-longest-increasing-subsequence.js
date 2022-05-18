/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n+1)
        memo[i].fill(-1)
    }
    let dp = function(index, prevIndex) {
        
        if(index == n) {
            return 0
        }
        if(memo[index][prevIndex+1] != -1) {
            return memo[index][prevIndex+1]
        }
        //nottake
        let nottake = 0 + dp(index+1, prevIndex)
        let take = 0
        if(prevIndex == -1 || nums[prevIndex] < nums[index]) {
            take = 1 + dp(index+1, index)
        }
        memo[index][prevIndex+1] = Math.max(nottake, take)
        return memo[index][prevIndex+1]
    }
    
    return dp(0, -1)
};