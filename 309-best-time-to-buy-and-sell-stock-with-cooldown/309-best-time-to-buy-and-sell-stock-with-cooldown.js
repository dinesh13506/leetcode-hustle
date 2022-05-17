/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let n = prices.length
    
    let memo = new Array(n+1)
    for(let i = 0; i <=n; i++) {
        memo[i] = new Array(2)
        memo[i].fill(-1)
    }
    
    let dp = function(i, buy) {
        if(i === n || i >= n) {
            return 0
        }
        
        if(memo[i][buy] != -1) {
            return memo[i][buy]
        }
        if(buy) {
            let buystock = -prices[i] + dp(i+1, 0)
            let notbuy = 0 + dp(i+1, 1)
            let profit = Math.max(buystock, notbuy)
            return memo[i][buy] = profit
        } else {
            let sellstock = prices[i] + dp(i+2,1)
            let notsellstock = 0 + dp(i+1,0)
            let profit = Math.max(sellstock, notsellstock)
            return memo[i][buy] = profit
        }
    }
    
    return dp(0,1)
};