/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfitTab = function(prices) {
    
    let n = prices.length
    let after = new Array(2)
    for(let i = 0; i <= 1; i++) {
        after[i] = new Array(3)
        after[i].fill(0)
    }
    
    //first base case if index == n then buy and cap can be anything
    for(let buy = 0; buy <=1; buy++) {
        for(let cap = 0; cap <=2; cap++) {
           after[buy][cap] = 0
        }
    }
    
    //second base case if cap == 0 then index and buy can be anything
    for(let i = 0 ; i <= n; i++) {
        for(let buy = 0; buy <=1; buy++) {
            after[buy][0] = 0
        }
    }
    
    for(let i = n-1; i >=0; i--) {
        let curr = new Array(2)
        for(let i = 0; i <= 1; i++) {
            curr[i] = new Array(3)
            curr[i].fill(0)
        }
        for(let buy = 0; buy <=1; buy++) {
            for(let cap = 0; cap<=2; cap++) {
                    if(cap == 0) {
                        curr[buy][cap] =  0
                        continue
                    }
                    if(buy) {
                        let buyStock = -1 * prices[i] + after[0][cap]
                        let notBuyStock = 0 + after[1][cap]
                        let profit = Math.max(buyStock, notBuyStock)
                        curr[buy][cap] =  profit
                     } 
                    else {
                        let sellStock = prices[i] + after[1][cap-1]
                        let notSellStock = 0 + after[0][cap]
                        let profit = Math.max(sellStock, notSellStock)
                        curr[buy][cap] =  profit
                    }
            }     
        }
        after = curr
    }
    
    return after[1][2]
};

var maxProfit = function(prices) {
    
    let n = prices.length
    let dp = new Array(n+1)
    for(let i = 0; i <= n; i++) {
        dp[i] = new Array(2)
        for(let j = 0; j < 2; j++) {
            dp[i][j] = new Array(3) // atmost 3 transactions
            dp[i][j].fill(0)
        }
    }
    
    //first base case if index == n then buy and cap can be anything
    for(let buy = 0; buy <=1; buy++) {
        for(let cap = 0; cap <=2; cap++) {
            dp[n][buy][cap] = 0
        }
    }
    
    //second base case if cap == 0 then index and buy can be anything
    for(let i = 0 ; i <= n; i++) {
        for(let buy = 0; buy <=1; buy++) {
            dp[i][buy][0] = 0
        }
    }
    
    for(let i = n-1; i >=0; i--) {
        for(let buy = 0; buy <=1; buy++) {
            for(let cap = 0; cap<=2; cap++) {
                    if(cap == 0) {
                        dp[i][buy][cap] =  0
                        continue
                    }
                    if(buy) {
                        let buyStock = -1 * prices[i] + dp[i + 1][0][cap]
                        let notBuyStock = 0 + dp[i + 1][1][cap]
                        let profit = Math.max(buyStock, notBuyStock)
                        dp[i][buy][cap] =  profit
                     } 
                    else {
                        let sellStock = prices[i] + dp[i+1][1][cap-1]
                        let notSellStock = 0 + dp[i+1][0][cap]
                        let profit = Math.max(sellStock, notSellStock)
                        dp[i][buy][cap] =  profit
                    }
            }     
        }
    }
    
    return dp[0][1][2]
};