/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let n = coins.length
    let prev = new Array(amount+1)
    prev.fill(0)
    
    for(let am = 0; am <= amount; am++) {
        if(am % coins[0] === 0) {
            prev[am] = am / coins[0]
        } else {
            prev[am] = Infinity
        }
    }
    
    for(let i = 1; i < n; i++) {
        let curr = new Array(amount+1)
        curr.fill(0)
        for(let am = 0; am <= amount; am++) {
            let nottake = prev[am]
            let take = Infinity
            if(coins[i] <= am) {
                take = 1 + curr[am-coins[i]]
            }
            curr[am] = Math.min(nottake, take)
        }
        prev = curr
    }
    
    let ans = prev[amount]
    return ans === Infinity ? -1 : ans
};