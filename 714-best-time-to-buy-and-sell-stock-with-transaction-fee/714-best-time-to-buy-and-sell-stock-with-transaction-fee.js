/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfitMemo = function(prices,fee) {
    
    let n = prices.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(2)
        memo[i].fill(-1)
    }
    let dp = function(index, buy) {
        
        if(index === prices.length) {
            return 0
        }
        if(memo[index][buy] != -1) {
            return memo[index][buy]
        }
        let profit = 0
        if(buy) {
            let profit1 = -1 * prices[index] + dp(index + 1, 0) //buy
            let profit2 = 0 + dp(index+1, 1) //not buy, can still buy on next days
            profit = Math.max(profit1, profit2)
            
            
        } else {
            let profit1 = 1 * prices[index] + dp(index + 1, 1) //sell
            let profit2 = 0 + dp(index+1, 0) //not sell, can still sell on next days
            profit = Math.max(profit1, profit2)
            
        }
        memo[index][buy] = profit
        return  memo[index][buy]
    }
    
    return dp(0,1)
};

var maxProfitTab = function(prices,fee) {
    
    let n = prices.length
    let dp = new Array(n+1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new Array(2)
        dp[i].fill(0)
    }
    
    dp[n][0] = 0
    dp[n][1] = 0
    
    for(let i = n-1; i >=0; i--) {
        for(let buy = 0; buy <=1; buy++) {
            let profit = 0
            if(buy) {
                let profit1 = -1 * prices[i] + dp[i+1][0]
                let profit2 = 0 + dp[i+1][1]
                profit = Math.max(profit1, profit2)
            } else {
                let profit1 = 1 * prices[i] + dp[i+1][1]
                let profit2 = 0 + dp[i+1][0]
                profit = Math.max(profit1, profit2)
            }
            dp[i][buy] = profit
        }
    }
    return dp[0][1]
};


var maxProfit = function(prices,fee) {
    
    let n = prices.length
    let ahead = new Array(2)
    ahead.fill(0)
    
    ahead[0] = 0
    ahead[1] = 0
    
    for(let i = n-1; i >=0; i--) {
        let curr = new Array(2)
        curr.fill(0)
        for(let buy = 0; buy <=1; buy++) {
            let profit = 0
            if(buy) {
                let profit1 = -1 * prices[i] + ahead[0]
                let profit2 = 0 + ahead[1]
                profit = Math.max(profit1, profit2)
            } else {
                let profit1 = 1 * prices[i] + ahead[1] - fee
                let profit2 = 0 + ahead[0]
                profit = Math.max(profit1, profit2)
            }
            curr[buy] = profit
        }
        ahead = curr
    }
    return ahead[1]
};