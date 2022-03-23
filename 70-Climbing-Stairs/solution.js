/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let memo = new Map()
    let dp = function(i) {
       if( i <= 2) {
            return i
        }
        if(!memo.has(i)) {
            memo.set(i,dp(i-1) + dp(i-2) )
        }
        return memo.get(i)
    }
    
    return dp(n)
    
};