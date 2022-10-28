/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    let max_on_right = new Array(n);
    max_on_right.fill(-Infinity);
    let maxTillNow = -Infinity;
    for(let i = n -1; i >= 0; i--) {
        max_on_right[i] = maxTillNow;
        maxTillNow = Math.max(prices[i], maxTillNow);
    }
    //console.log(max_on_right);
    let maxProfit = 0;
    for(let i = 0; i < n; i++) {
        let profit = max_on_right[i] - prices[i];
        if(profit > 0) {
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
};