/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0, min = prices[0]
    for(let i = 0; i < prices.length; i++) {
        let currPrice = prices[i]
        let cost = currPrice - min
        profit = Math.max(profit, cost)
        min = Math.min(min, currPrice)
    }
    return profit
};