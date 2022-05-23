/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    return maxSumAfterPartitioningMemo(arr, k)
};


var maxSumAfterPartitioningMemo = function(arr, k) {
    let n = arr.length
    let memo = new Array(n)
    memo.fill(-1)
    let min = function(a,b) {
        return Math.min(a,b)
    }
    let max = function(a,b) {
        return Math.max(a,b)
    }
    let dp = function(i) {
        if(i == n) return 0
        if(memo[i] != -1) {
            return memo[i]
        }
        let len = 0, maxi = -Infinity, maxel = -Infinity
        for(let j= i ; j < min(i+k, n); j++) {
            len++
            maxel = max(maxel, arr[j])
            let sum = len * maxel + dp(j+1)
            maxi = max(maxi, sum)
        }
        memo[i] =  maxi
        return memo[i]
    }
    return dp(0)
};