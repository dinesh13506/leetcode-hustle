/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitMemo = function(prices) {
    
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

var maxProfitTab = function(prices) {
    
    let n = prices.length
    
    let dp = new Array(n+2)
    for(let i = 0; i <=n+1; i++) {
        dp[i] = new Array(2)
        dp[i].fill(0)
    }
    
    for(let buy = 0; buy <= 1; buy++) {
        dp[n][buy] = 0
    }
    
    for(let i = n-1; i>=0; i--) {
        for(let buy = 0; buy <= 1; buy++) {
            if(buy) {
                let buystock = -prices[i] + dp[i+1][0]
                let notbuy = 0 + dp[i+1][1]
                let profit = Math.max(buystock, notbuy)
                dp[i][buy] = profit
            } else {
                let sellstock = prices[i] + (dp[i+2][1])
                let notsellstock = 0 + dp[i+1][0]
                let profit = Math.max(sellstock, notsellstock)
               dp[i][buy] = profit
            }
        }
    }
    
    return dp[0][1]
};

var maxProfit = function(prices) {
    
    let n = prices.length
    
    let front1 = new Array(2)
    front1.fill(0)
    let front2 = new Array(2)
    front2.fill(0)
    
    
    for(let buy = 0; buy <= 1; buy++) {
        front1[buy] = 0
    }
    
    for(let i = n-1; i>=0; i--) {
        let curr = new Array(2)
        curr.fill(0)
        for(let buy = 0; buy <= 1; buy++) {
            if(buy) {
                let buystock = -prices[i] + front1[0]
                let notbuy = 0 + front1[1]
                let profit = Math.max(buystock, notbuy)
                curr[buy] = profit
            } else {
                let sellstock = prices[i] + (front2[1])
                let notsellstock = 0 + front1[0]
                let profit = Math.max(sellstock, notsellstock)
                curr[buy] = profit
            }
        }
        front2 = front1
        front1 = curr
    }
    
    return front1[1]
};