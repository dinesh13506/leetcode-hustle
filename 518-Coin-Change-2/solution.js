/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    
    let dp = new Array(amount+1)
    for(let i = 0; i <= amount; i++) {
        dp[i] = new Array(coins.length+1)
    }
    //if amount = 0
    for(let j = 0; j<= coins.length; j++) {
        dp[0][j] = 1
    }
    //if coins length is zero
    for(let i = 1; i <= amount; i++) {
        dp[i][0] = 0
    }
    
    for(let i = 1; i<=amount; i++) {
        for(let j = 1; j<=coins.length; j++) {
            dp[i][j] = dp[i][j-1]
            if(coins[j-1] <= i) {
                dp[i][j] = dp[i][j] + dp[i-coins[j-1]][j]
            }
        }
    }
    return dp[amount][coins.length]
};