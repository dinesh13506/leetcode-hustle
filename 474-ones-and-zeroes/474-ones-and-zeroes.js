/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxFormMemo = function(strs, m, n) {
    
    //strs has n states
    //zeroes has 0 ..  to m states => m + 1
    // ones has 0 ... n states => n+1
    // memo[strs.length][m+1][n+1]
    let memo = new Array(strs.length)
    for(let i = 0; i < strs.length; i++) {
        memo[i] = new Array(m+1)
        for(let j = 0; j < m+1; j++) {
            memo[i][j] = new Array(n+1)
            memo[i][j].fill(-1)
        }
    }
    
    //calculate zeroes and ones
    let getCharCount = function(str) {
        let zero = 0, len = str.length
        for(let ch of str) {
            if(ch == '0') {
                zero++
            }
        }
        return [zero, len - zero]
    }
    
    //pre calculate for all strs
    let count = []
    for(let str of strs) {
        count.push(getCharCount(str))
    }
    
    let dp = function(i, zeroes, ones) {
        
        if(i>= strs.length) {
            return 0
        }
        
        if(memo[i][zeroes][ones] != -1) {
            return memo[i][zeroes][ones]
        }
        
        let max = 0
        let arr = count[i]
        let take = -1
        if(zeroes - arr[0] >= 0 && ones - arr[1] >= 0) {
            take = 1 + dp(i+1, zeroes - arr[0], ones - arr[1])
        }
        let nottake = 0 + dp(i+1, zeroes - 0, ones - 0)
        memo[i][zeroes][ones] = Math.max(take,nottake)
        return memo[i][zeroes][ones]
    }
    return dp(0, m, n)
};

var findMaxFormTab = function(strs, m, n) {
    
    //strs has n states
    //zeroes has 0 ..  to m states => m + 1
    // ones has 0 ... n states => n+1
    // memo[strs.length][m+1][n+1]
    let dp = new Array(strs.length + 1)
    for(let i = 0; i <= strs.length; i++) {
        dp[i] = new Array(m+1)
        for(let j = 0; j < m+1; j++) {
            dp[i][j] = new Array(n+1)
            dp[i][j].fill(0)
        }
    }
    
    //calculate zeroes and ones
    let getCharCount = function(str) {
        let zero = 0, len = str.length
        for(let ch of str) {
            if(ch == '0') {
                zero++
            }
        }
        return [zero, len - zero]
    }
    
    //pre calculate for all strs
    let count = []
    for(let str of strs) {
        count.push(getCharCount(str))
    }
    
    for(let i = strs.length-1; i>=0 ; i--) {
        for(let zeroes = 0; zeroes <=m; zeroes++) {
            for(let ones = 0; ones <=n; ones++) {
                let max = 0
                let arr = count[i]
                let take = -1
                if(zeroes - arr[0] >= 0 && ones - arr[1] >= 0) {
                    take = 1 + dp[i+1][zeroes - arr[0]][ones - arr[1]]
                }
                let nottake = 0 + dp[i+1][zeroes - 0][ones - 0]
                dp[i][zeroes][ones] = Math.max(take,nottake)
            }
        }
    }
    
    return dp[0][m][n]
};



var findMaxForm = function(strs, m, n) {
    
    //strs has n states
    //zeroes has 0 ..  to m states => m + 1
    // ones has 0 ... n states => n+1
    // memo[strs.length][m+1][n+1]
    let dp = new Array(strs.length + 1)
    for(let i = 0; i <= strs.length; i++) {
        dp[i] = new Array(m+1)
        for(let j = 0; j < m+1; j++) {
            dp[i][j] = new Array(n+1)
            dp[i][j].fill(0)
        }
    }
    
    let next = new Array(m+1)
    for(let j = 0; j < m+1; j++) {
        next[j] = new Array(n+1)
        next[j].fill(0)
    }
    
    //calculate zeroes and ones
    let getCharCount = function(str) {
        let zero = 0, len = str.length
        for(let ch of str) {
            if(ch == '0') {
                zero++
            }
        }
        return [zero, len - zero]
    }
    
    //pre calculate for all strs
    let count = []
    for(let str of strs) {
        count.push(getCharCount(str))
    }
    
    for(let i = strs.length-1; i>=0 ; i--) {
        let curr = new Array(m+1)
        for(let j = 0; j < m+1; j++) {
            curr[j] = new Array(n+1)
            curr[j].fill(0)
        }
        for(let zeroes = 0; zeroes <=m; zeroes++) {
            for(let ones = 0; ones <=n; ones++) {
                let max = 0
                let arr = count[i]
                let take = -1
                if(zeroes - arr[0] >= 0 && ones - arr[1] >= 0) {
                    take = 1 + next[zeroes - arr[0]][ones - arr[1]]
                }
                let nottake = 0 + next[zeroes - 0][ones - 0]
                curr[zeroes][ones] = Math.max(take,nottake)
            }
        }
        next = curr
    }
    
    return next[m][n]
};