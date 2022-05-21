/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeMemo = function(coins, amount) {
    
    let n = coins.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(amount+1)
        memo[i].fill(-1)
    }
    let dp = function(i, amount) {
        if(amount == 0) {
            return 0
        }
        if(i === 0) {
            if(amount % coins[0] == 0) {
                return amount / coins[0]
            } else {
                return Infinity
            }
        }
        
        if(memo[i][amount] != -1) {
            return memo[i][amount] 
        }
        
        let take = Infinity
        if(amount >= coins[i]) {
            take = 1 + dp(i, amount-coins[i])
        }
        let nottake = 0 + dp(i-1, amount)
        memo[i][amount]  =  Math.min(take, nottake)
        return memo[i][amount]
    }
    
    let count =  dp(n-1,amount)
    return count == Infinity ? -1 : count
};


var coinChange = function(coins, amount) {
    
    let n = coins.length
    let dp = new Array(n)
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(amount+1)
        dp[i].fill(0)
    }
    
    //if amount is 0
    for(let i = 0; i < n; i++) {
        dp[i][0] = 0
    }
    //second base case
    for(let amt = 1; amt <= amount; amt++) {
        if(amt % coins[0] == 0) {
            dp[0][amt] = amt / coins[0]
        } else {
            dp[0][amt] =  Infinity
        }
    }
    
    //console.log(dp)
    for(let i = 1; i < n; i++) {
        for(let amt = 1; amt <= amount; amt++) {
            let take = Infinity
            if(amt >= coins[i]) {
                take = 1 + dp[i][amt-coins[i]]
            }
            let nottake = 0 + dp[i-1][amt]
            
            dp[i][amt]  =  Math.min(take, nottake)
        }
    }
    
    return ( dp[n-1][amount] === Infinity ? -1 : dp[n-1][amount])
    
};