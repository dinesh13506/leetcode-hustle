/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoinsMemo = function(nums) {
   
    let n = nums.length
    nums.push(1)
    nums.unshift(1)
    
    let memo = new Array(n+1)
    for(let i = 0; i <= n; i++) {
        memo[i] = new Array(n+1)
        memo[i].fill(-1)
    }
   
    
    let dp = function(i,j) {
        if(i > j) {
            return 0
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let max = -Infinity
        for(let index = i; index <=j; index++) {
            let coins = (nums[i-1] * nums[index] * nums[j+1]) + dp(i,index-1) + dp(index+1,j)
            max = Math.max(max,coins)
        }
        memo[i][j] =  max
        return memo[i][j]
    }
    
    return dp(1,n)
};



var maxCoins = function(nums) {
   
    let n = nums.length
    nums.push(1)
    nums.unshift(1)
    
    let dp = new Array(n+2)
    for(let i = 0; i <= n+1; i++) {
        dp[i] = new Array(n+2)
        dp[i].fill(0)
    }
    
    for(let i = n; i >= 1; i--) {
        for(let j=1; j <=n; j++) {
            if( i > j) continue
            let max = -Infinity
            for(let index = i; index <=j; index++) {
                let coins = (nums[i-1] * nums[index] * nums[j+1]) + dp[i][index-1] + dp[index+1][j]
                max = Math.max(max,coins)
            }
            dp[i][j] =  max
        }
    }
    
    return dp[1][n]
   
    
    
};