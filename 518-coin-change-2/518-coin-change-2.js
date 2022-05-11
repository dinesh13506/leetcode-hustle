/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
    let n = coins.length
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(amount+1)
        memo[i].fill(-1)
    }
    let dp = function(index, amount) {
        
        if(index == 0) {
            if(amount % coins[0] == 0) {
                return 1
            } else {
                return 0
            }
        }
        if(memo[index][amount] != -1) {
            return memo[index][amount]
        }
        let nottake = dp(index - 1, amount)
        let take= 0 
        if(coins[index] <= amount) {
            take = dp(index, amount-coins[index]) //infinite supplies then stay at same index
        }
        memo[index][amount] =  take + nottake
        return memo[index][amount]
    }
    
    return dp(n-1, amount)
};