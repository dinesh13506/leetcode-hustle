/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length
  let maxFuturePrice = new Array(n)
  maxFuturePrice[n-1] = prices[n-1]
  for(let i = n-2; i>=0; i--) {
      let currentPrice = prices[i]
      maxFuturePrice[i] = Math.max(maxFuturePrice[i+1],currentPrice)
  }
    let profit = 0
    for(let i = 0; i < n; i++) {
        let currentProfit = maxFuturePrice[i] - prices[i]
        profit = Math.max(profit,currentProfit)
    }
    return profit
        
    
};