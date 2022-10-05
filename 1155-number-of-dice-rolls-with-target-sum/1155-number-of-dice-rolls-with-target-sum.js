/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    
    const MOD = BigInt(10) ** BigInt(9) + BigInt(7)
    
    let memo = new Array(n)
    for(let i=0;i < n; i++) {
        memo[i] = new Array(target)
    }
    let dp = (diceNo, sum) => {
        if(diceNo == n && sum == target) return BigInt(1)
        if(diceNo >= n || sum > target)  return BigInt(0)
        
        if(memo[diceNo][sum] != undefined) return memo[diceNo][sum]
        let ways = BigInt(0)
        for(let i = 1; i <= k; i++) {
            ways += dp(diceNo + 1, sum + i)
        }
        
        memo[diceNo][sum] =  ways % MOD
        return memo[diceNo][sum]
    }
    return dp(0,0)
};