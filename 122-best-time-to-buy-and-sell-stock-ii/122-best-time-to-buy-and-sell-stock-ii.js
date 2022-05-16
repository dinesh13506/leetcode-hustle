/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
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