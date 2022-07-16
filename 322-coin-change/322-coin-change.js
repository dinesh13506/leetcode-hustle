/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    
    let n = coins.length
    let prev = new Array(amount + 1)
    prev.fill(Infinity)
    prev[0] = 0
    for(let index = 0; index < n; index++) {
        let curr = new Array(amount + 1)
        curr.fill(Infinity)
        curr[0] = 0
        for(let amt = 1; amt <= amount; amt++) {
            let take = Infinity
            if(coins[index] <= amt) {
                take = 1 + curr[amt - coins[index]]
            }
            let nottake = index - 1 < 0 ? Infinity : prev[amt]
            curr[amt] = Math.min(take, nottake) 
        }
        prev = curr
    }
    let ans = prev[amount]
    if(ans == Infinity) return -1
    return ans
};

var coinChangeDP = function(coins, amount) {
    
    let n = coins.length
    
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(amount + 1)
        dp[i].fill(Infinity)
    }
    for(let index = 0; index < n; index++) {
        dp[index][0] = 0
    }
    for(let index = 0; index < n; index++) {
        for(let amt = 1; amt <= amount; amt++) {
            let take = Infinity
            if(coins[index] <= amt) {
                take = 1 + dp[index][amt - coins[index]]
            }
            let nottake = index - 1 < 0 ? Infinity : dp[index - 1][amt]
            dp[index][amt] = Math.min(take, nottake) 
        }
    }
    let ans = dp[n-1][amount]
    if(ans == Infinity) return -1
    return ans
};


var coinChangeMemo = function(coins, amount) {
    
    let n = coins.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(amount + 1)
        memo[i].fill(-1)
    }
    let dp = (index , amount) => {
        if(index < 0 || amount < 0) {
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