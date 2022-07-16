/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let n = coins.length
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(amount + 1)
        memo[i].fill(-1)
    }
    let dp = (index , amount) => {
        if(index < 0) {
            return Infinity
        }
        if(amount < 0) {
            return Infinity
        }
        if(amount == 0) {
            return 0
        }
        
        if(memo[index][amount] != -1) {
            return memo[index][amount]
        }
        
        let take = Infinity
        if(coins[index] <= amount) {
            take = 1 + dp(index, amount - coins[index])
        }
        
        let nottake = dp(index - 1, amount)
        
        memo[index][amount] =  Math.min(take, nottake)
        return memo[index][amount]
    }
    
    let ans = dp(n-1, amount)
    if(ans == Infinity) return -1
    return ans
};