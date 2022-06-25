/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0
    let minPrice = prices[0]
    for(let i = 0; i < prices.length; i++) {
        let currPrice = prices[i]
        let currProfit = currPrice - minPrice
        profit = Math.max(currProfit, profit)
        minPrice = Math.min(minPrice, currPrice)
    }
    return profit
};