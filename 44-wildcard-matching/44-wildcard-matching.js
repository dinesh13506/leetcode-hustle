/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchMemo = function(s, p) {
    
    let s1 = p
    let s2 = s
    let m = s1.length
    let n = s2.length
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    
    let dp = function(i , j) {
        
        if(i < 0 && j < 0) return true
        if(i < 0 && j >= 0) return false
        if(i >=0 && j < 0) {
            let c = i
            while(c>=0) {
                if(s1[c] != '*') return false
                c--
            }
            return true
        }
        
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        
        if(s1[i] === s2[j] || s1[i] === '?') {
            memo[i][j] =  dp(i-1, j-1)
            return memo[i][j]
        }
        if(s1[i] === '*') {
            memo[i][j] =  dp(i-1,j) || dp(i,j-1)
            return memo[i][j]
        }
        memo[i][j] =  false
        return memo[i][j]
    }
    
    return dp(m-1,n-1)
};



var isMatchTab = function(s, p) {
    
    let s1 = p
    let s2 = s
    let m = s1.length
    let n = s2.length
    
    let dp = new Array(m + 1)
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1)
        dp[i].fill(false)
    }
    
    for(let j = 1; j <=n; j++) {
        dp[0][j] = false
    }
    for(let i = 1; i <= m; i++) {
        let c = i, flag = true
        while(c >= 1 ) {
            if(s1[c-1] != "*") { 
                flag = false
                break       
             }
           c-- 
        }
        dp[i][0] = flag
    }
    dp[0][0] = true
    
    for(let i=1; i <= m ; i++) {
        for(let j = 1; j <= n; j++) {
            if(s1[i-1] == s2[j-1] || s1[i-1] == '?') {
                dp[i][j] = dp[i-1][j-1]
            } else if(s1[i-1] == '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1]
            } else {
                dp[i][j] = false
            }
        }
    }
    
    return dp[m][n]

};


var isMatch = function(s, p) {
    
    let s1 = p
    let s2 = s
    let m = s1.length
    let n = s2.length
    
    let prev = new Array(n + 1)
    prev.fill(false)
    for(let j = 1; j <=n; j++) {
        prev[j] = false
    }
    prev[0] = true
    
    for(let i=1; i <= m ; i++) {
        let curr = new Array(n + 1)
        curr.fill(false)
        let c = i, flag = true
        while(c >= 1 ) {
            if(s1[c-1] != "*") { 
                flag = false
                break       
             }
           c-- 
        }
        
        curr[0] = flag
        for(let j = 1; j <= n; j++) {
            if(s1[i-1] == s2[j-1] || s1[i-1] == '?') {
                curr[j] = prev[j-1]
            } else if(s1[i-1] == '*') {
                curr[j] = prev[j] || curr[j-1]
            } else {
                curr[j] = false
            }
        }
        prev = curr
    }
    
    return prev[n]

};