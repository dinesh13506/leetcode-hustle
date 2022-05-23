/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    
    //return minCutMemo(s)
    return minCutTopDown(s)
};


var minCutMemo = function(s) {
    let n = s.length
    let memo = new Array(n)
    memo.fill(-1)
    let ispalindrome = function(i, j) {
        while(i <= j) {
            if(s[i] != s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    let dp = function(i) {
        if(i == n) {
            return 0
        }
        if(memo[i] != -1) {
            return memo[i]
        }
        let mini = Infinity
        for(let j = i; j < n; j++) {
            if(ispalindrome(i,j) === true) {
                let count = 1 + dp( j + 1)
                mini = Math.min(mini, count)
            }
        }
        memo[i] = mini
        return memo[i]
    }
    return dp(0) - 1
}

var minCutTopDown = function(s) {
    let n = s.length
    let dp = new Array(n+1)
    dp.fill(0)
    
    let ispalindrome = function(i, j) {
        while(i <= j) {
            if(s[i] != s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    
    for(let i = n-1; i >=0; i--) {
        let mini = Infinity
        for(let j = i; j < n; j++) {
            if(ispalindrome(i,j) === true) {
                let count = 1 + dp[j + 1]
                mini = Math.min(mini, count)
            }
        }
        dp[i] = mini
    }
    return dp[0] - 1
}