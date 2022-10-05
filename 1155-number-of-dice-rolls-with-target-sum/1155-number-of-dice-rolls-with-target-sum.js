/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
// var numRollsToTarget = function(n, k, target) {
//     const mod = BigInt(10) ** BigInt(9) + BigInt(7)
//     let memo = new Array(n)
//     for(let i = 0; i < n ; i++) {
//         memo[i] = new Array(target+1)
//     }
    
//     let dp = (index, sum) => {
//         if(sum > target || index > n) {
//             return 0n
//         }
//         if(index == n) {
//             return sum == target ? 1n : 0n
//         }
//         if(memo[index][sum]) return memo[index][sum]
        
//         let ways = 0n
//         for(let i = 1; i <= Math.min(k, target); i++) {
//             ways = ways + dp(index + 1, sum + i)
//         }
//         memo[index][sum] =  ways
//         return ways
//     }
//     let ans = dp(0,0)
//     //console.log(ans)
//     return ans % mod
// };

var numRollsToTarget = function(d, f, target) {
    
    const MOD = BigInt(10) ** BigInt(9) + BigInt(7); // 10^9 + 7.
    const dp = new Array(d);
    
    const helper = (rest, length) => {
       
        if(length === d && rest === 0) return BigInt(1);
        if(length > d || rest < 0) return BigInt(0);
        
        if(dp[length]?.[rest] !== undefined) return dp[length][rest];
        
        let sum = BigInt(0);
        
        for(let k = 1; k<= f; k++){
            sum += helper(rest - k, length + 1);
        }
        
        dp[length] = dp[length] || [];
        dp[length][rest] = sum;
        
        return sum % MOD;
    };
    
    return helper(target, 0) % MOD;
};