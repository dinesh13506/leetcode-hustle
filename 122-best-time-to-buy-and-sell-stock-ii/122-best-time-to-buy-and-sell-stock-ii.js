/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    let input = new Array(n)
    for(let i = 0; i < n; i++) {
        input[i] = new Array()
        for(let j = i + 1; j < n; j++) {
            if(prices[j] > prices[i]) {
                input[i].push(j)
            }
        }
    }
    //console.log(input)
    let map = new Map()
    let dp = function(i) {
        if( i >= n) {
            return 0
        }
        if(map.has(i) == false) {
            let futureInx = input[i]
            console
            let profit = 0
            for(let j of futureInx) {
                profit = Math.max(profit, (prices[j] - prices[i]) + dp(j+1))
            }
            let max = Math.max(0 + dp(i+1), profit)
            map.set(i,max)
        }
        
        return map.get(i)
        
    }
    let maxProfit = 0
    for(let i = 0; i < n; i++) {
        maxProfit = Math.max(dp(i),maxProfit)
    }
    //console.log(map)
    return maxProfit
};