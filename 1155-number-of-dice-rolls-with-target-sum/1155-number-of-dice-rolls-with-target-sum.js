/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    const mod = (BigInt(10) ** BigInt(9)) + BigInt(7)
    
    const map = new Array(d+1);
    for(let i = 0; i <= d; i++) {
        map[i] = new Array(target + 1)
        map[i].fill(null)
    }
    let dp = (rest, diceNo) => {
        if(diceNo == d && rest == 0) return BigInt(1)
        if(diceNo > d || rest < 0) return BigInt(0)
        if(map[diceNo][rest] != undefined) return map[diceNo][rest]
        let ways = BigInt(0)
        for(let k = 1; k <= f; k++) {
            ways += dp(rest - k, diceNo + 1)
        }
       map[diceNo][rest] = (ways % mod)
        return map[diceNo][rest]
    }
    
    return dp(target,0) % mod
};

// var numRollsToTarget = function(d, f, target) {
    
//     const MOD = BigInt(10) ** BigInt(9) + BigInt(7); // 10^9 + 7.
//     const dp = new Array(d+1);
//     for(let i = 0; i <= d; i++) {
//         dp[i] = new Array(target + 1)
//     }
    
//     const helper = (rest, length) => {
       
//         if(length === d && rest === 0) return BigInt(1);
//         if(length > d || rest < 0) return BigInt(0);
        
//         if(dp[length][rest] !== undefined) return dp[length][rest];
        
//         let sum = BigInt(0);
        
//         for(let k = 1; k<= f; k++){
//             sum += helper(rest - k, length + 1);
//         }
        
//         dp[length][rest] = sum;
        
//         return sum % MOD;
//     };
    
//     return helper(target, 0) % MOD;
// };