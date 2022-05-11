/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
    let n = coins.length
    
    let prev = new Array(amount+1)
    prev.fill(0)
    for(let j = 0; j <= amount; j++) {
        if(j % coins[0] == 0) {
            prev[j] = 1
        } else {
            prev[j] = 0
        }
    }
    
    for(let i = 1; i < n; i++) {
         let curr = new Array(amount+1)
         curr.fill(0)
        for(let am = 0; am <= amount; am++) {
            let nottake = prev[am]
            let take = 0
            if(coins[i] <= am) {
                take = curr[am-coins[i]]
            }
            curr[am] = take + nottake
        }
        prev = curr
    }
    return prev[amount]
};