/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let n = coins.length
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(amount+1)
        dp[i].fill(0)
    }
    
    for(let am = 0; am <= amount; am++) {
        if(am % coins[0] === 0) {
            dp[0][am] = am / coins[0]
        } else {
            dp[0][am] = Infinity
        }
    }
    
    for(let i = 1; i < n; i++) {
        for(let am = 0; am <= amount; am++) {
            let nottake = dp[i-1][am]
            let take = Infinity
            if(coins[i] <= am) {
                take = 1 + dp[i][am-coins[i]]
            }
            dp[i][am] = Math.min(nottake, take)
        }
    }
    
    let ans = dp[n-1][amount]
    return ans === Infinity ? -1 : ans
};