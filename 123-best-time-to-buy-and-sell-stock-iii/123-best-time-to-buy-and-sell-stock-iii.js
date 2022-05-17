/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let n = prices.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(2)
        for(let j = 0; j < 2; j++) {
            memo[i][j] = new Array(3) // atmost 3 transactions
            memo[i][j].fill(-1)
        }
    }
    console.log(memo)
    
    let dp = function(index, buy, cap) {
        
        /* all days are exhausted */
        if(index === n) {
            return 0
        }
        if(cap === 0) {
            return 0
        }
        
        if(memo[index][buy][cap] != -1) {
            return memo[index][buy][cap]
        }
        
        if(buy) {
            let buyStock = -1 * prices[index] + dp( index + 1, 0,  cap) //transaction is not caomplete
            let notBuyStock = 0 + dp( index + 1, 1, cap)
            let profit = Math.max(buyStock, notBuyStock)
            memo[index][buy][cap] =  profit
            return memo[index][buy][cap]
        } else {
            let sellStock = prices[index] + dp( index+1, 1, cap-1)
            let notSellStock = 0 + dp(index+1, 0, cap)
            let profit = Math.max(sellStock, notSellStock)
            memo[index][buy][cap] =  profit
            return memo[index][buy][cap]
        }
    }
    
    return dp(0,1,2)
};