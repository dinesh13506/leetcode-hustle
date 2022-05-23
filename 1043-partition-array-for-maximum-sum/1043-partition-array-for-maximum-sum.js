/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioningMemo = function(arr, k) {
    
    let n = arr.length
    let memo = new Array(n)
    memo.fill(-1)
    let dp = function(i) {
        if(i == n) {
            return 0
        }
        if(memo[i] != -1) {
            return memo[i]
        }
        let len = 0, maxi = -Infinity, maxAns = -Infinity 
        for(let j = i; j < Math.min(i + k, n); j++) {
            len++
            maxi = Math.max(maxi, arr[j])
            let sum = (len * maxi) + dp(j+1)
            maxAns = Math.max(maxAns, sum)
        }
        memo[i] =  maxAns
        return memo[i]
    }
    return dp(0)
};

var maxSumAfterPartitioning = function(arr, k) {
    
    let n = arr.length
    let dp = new Array(n+1)
    dp.fill(0)
    for(let i = n-1; i >=0; i--) {
        let len = 0, maxi = -Infinity, maxAns = -Infinity 
        for(let j = i; j < Math.min(i + k, n); j++) {
            len++
            maxi = Math.max(maxi, arr[j])
            let sum = (len * maxi) + dp[j+1]
            maxAns = Math.max(maxAns, sum)
        }
        dp[i] =  maxAns
    }
    return dp[0]
};