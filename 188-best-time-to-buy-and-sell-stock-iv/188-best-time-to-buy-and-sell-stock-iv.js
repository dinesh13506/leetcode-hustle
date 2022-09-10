/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    
    const n = prices.length
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(2)
        for(let j = 0; j < 2; j++) {
            memo[i][j] = new Array(k+1)
            memo[i][j].fill(-1)
        }
    }
    let dp = (index, haveBought, transaction_count) => {
        if(index >= n || transaction_count <= 0) {
            return 0
        }
        if(memo[index][haveBought][transaction_count] != -1) {
            return memo[index][haveBought][transaction_count]
        }
        /** customer has already bought a stock before*/
        if(haveBought == 1) {
            // sell or not sell
            let sell = prices[index] + dp(index+1, 0, transaction_count-1)
            let notsell = 0 + dp(index + 1, 1, transaction_count)
            memo[index][haveBought][transaction_count] =  Math.max(sell, notsell)
            
        } else {
            //buy or not buy
            let buy = -prices[index] + dp(index+1, 1, transaction_count)
            let notbuy = 0 + dp(index+1, 0, transaction_count)
            memo[index][haveBought][transaction_count] =  Math.max(buy, notbuy)
        }
        return memo[index][haveBought][transaction_count]
    }
    
    return dp(0, 0,k)
    
};