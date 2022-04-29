/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let local_min = prices[0]
    let local_max = prices[0]
    let i = 0, profit = 0
    while(i < prices.length - 1) {
        while(i < prices.length - 1 && prices[i+1] <= prices[i]) {
            i++
        }
        local_min = prices[i]
        while(i < prices.length - 1 && prices[i+1] >= prices[i]) {
            i++
        }
        local_max = prices[i]
        profit = profit + (local_max - local_min)
    }
    return profit
};