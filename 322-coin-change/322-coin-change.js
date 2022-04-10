/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let dp = new Array(amount+1)
    dp.fill(Infinity)
    dp[0] = 0
    for(let i = 1; i <= amount; i++) {
        let min = Infinity
        for(let j = 0; j < coins.length; j++) {
            if(coins[j] <= i) {
                min = Math.min(min,dp[i-coins[j]])
            }
        }
        if(min != Infinity) {
            dp[i] = min + 1
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};