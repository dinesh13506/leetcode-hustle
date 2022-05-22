/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    
    let n = s.length
    let isPalindrome = function(i,j) {
        while(i <=j ) {
            if(s[i] != s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    if(n <= 1 || isPalindrome(0,n-1) == true) {
        return 0
    }
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = -1
    }
    let dp = function(i) {
        if(i == n) {
            return 0
        }
        if(memo[i] != -1) {
            return memo[i]
        }
        let min = Infinity
        for(let j = i; j < n; j++) {
            if(isPalindrome(i,j) == true) {
                let count = 1 + dp(j+1)
                min = Math.min(count, min)
            }
        }
        memo[i] =  min
        return memo[i]
    }
    return dp(0) - 1
};