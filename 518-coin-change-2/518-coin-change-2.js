/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
    let n = coins.length
    
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(amount+1)
        dp[i].fill(0)
    }
    
    for(let j = 0; j <= amount; j++) {
        if(j % coins[0] == 0) {
            dp[0][j] = 1
        } else {
            dp[0][j] = 0
        }
    }
    
    for(let i = 1; i <n; i++) {
        for(let am = 0; am <= amount; am++) {
            let nottake = dp[i-1][am]
            let take = 0
            if(coins[i] <= am) {
                take = dp[i][am-coins[i]]
            }
            dp[i][am] = take + nottake
        }
    }
    return dp[n-1][amount]
};