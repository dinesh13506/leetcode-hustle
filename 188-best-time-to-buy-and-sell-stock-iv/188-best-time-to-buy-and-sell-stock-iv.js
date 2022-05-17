/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitMemo = function(k, prices) {
    
    let n = prices.length
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new  Array(2)
        for(let buy = 0; buy <=1; buy++) {
            memo[i][buy] = new Array(k+1)
            memo[i][buy].fill(-1)
        }
    }
    
    let dp = function(i, buy, cap) {
        if(i === n || cap ==0) {
            return 0
        }
        
        if(memo[i][buy][cap] != -1) {
            return memo[i][buy][cap]
        }
        
        if(buy) {
            let buystock = -prices[i] + dp(i+1, 0, cap)
            let notbuystock = 0 + dp(i+1, 1, cap)
            let profit = Math.max(buystock, notbuystock)
            memo[i][buy][cap] =  profit
            return memo[i][buy][cap]
            
        } else {
            let sellstock = prices[i] + dp(i+1,1,cap-1)
            let notsellstock = 0 + dp(i+1,0,cap)
            let profit = Math.max(sellstock,notsellstock)
            memo[i][buy][cap] =  profit
            return memo[i][buy][cap]
        }
    }
    
    return dp(0,1,k)
};


var maxProfit = function(k, prices) {
    
    let n = prices.length
    
    let dp = new Array(n+1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new  Array(2)
        for(let buy = 0; buy <=1; buy++) {
            dp[i][buy] = new Array(k+1)
            dp[i][buy].fill(0)
        }
    }
    
    for(let i = n-1; i >=0; i--) {
        for(let buy = 0; buy <=1; buy++) {
            for(let cap=1; cap<=k; cap++) {
               if(buy) {
                    let buystock = -prices[i] + dp[i+1][0][cap]
                    let notbuystock = 0 + dp[i+1][1][cap]
                    let profit = Math.max(buystock, notbuystock)
                    dp[i][buy][cap] =  profit
                    
            
                } else {
                    let sellstock = prices[i] + dp[i+1][1][cap-1]
                    let notsellstock = 0 + dp[i+1][0][cap]
                    let profit = Math.max(sellstock,notsellstock)
                    dp[i][buy][cap] =  profit
                } 
            }
        }
    }
    
    return dp[0][1][k]
    
    
};