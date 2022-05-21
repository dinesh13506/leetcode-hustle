/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    
    let n = nums.length
    let coins = new Array(n+2)
    for(let i = 0; i < n; i++) {
        coins[i+1] = nums[i]
    }
    coins[0] = 1
    coins[n+1] = 1
    let memo = new Array(n+2)
    for(let i = 0; i < n+2; i++) {
        memo[i] = new Array(n+2)
        memo[i].fill(-1)
    }
    let dp = function(i,j) {
        if(i > j) {
            return 0
        }
        if(memo[i][j] != -1) {
            return memo[i][j]
        }
        let ans = 0
        for(let k= i + 1; k < j; k++) {
            let gain = coins[k] * coins[i] * coins[j]
            gain = gain + dp(i, k) + dp(k,j)
            ans = Math.max(ans, gain)
        }
        memo[i][j] = ans
        return  memo[i][j]
    }
    
    return dp(0, n+1)
};