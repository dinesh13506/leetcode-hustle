/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let n = coins.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(amount+1)
        memo[i].fill(-1)
    }
    
   
    let dp = function(index, amount) {
        if(index == 0) {
            if( (amount % coins[0]) === 0) {
                return (amount/coins[0])
            } else {
                return Infinity
            }
        }
        
        if(memo[index][amount] != -1) {
            return memo[index][amount]
        }
        let nottake = 0 + dp(index-1, amount)
        let take = Infinity
        if(coins[index] <= amount) {
            take = 1 + dp(index, amount - coins[index])
        }
        memo[index][amount] = Math.min(nottake, take)
        return memo[index][amount]
    }
    
    let ans = dp(n-1, amount)
    return ans === Infinity ? -1 : ans
};