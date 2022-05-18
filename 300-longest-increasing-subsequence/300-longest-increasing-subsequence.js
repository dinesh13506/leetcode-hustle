/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISMemo = function(nums) {
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



var lengthOfLIS = function(nums) {
    let n = nums.length
    let dp = new Array(n+1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new Array(n+1)
        dp[i].fill(0)
    }
    
    for(let i = n-1; i >=0; i--) {
        for(let previ = i-1; previ >= -1; previ--) {
            
            let notake = 0 + dp[i+1][previ+1]
            let take = 0
            if(previ == -1 || nums[previ] < nums[i]) {
                take = 1 + dp[i+1][i+1]
            }
            dp[i][previ+1] = Math.max(take, notake)
        }
    }
    
    return dp[0][0]
};