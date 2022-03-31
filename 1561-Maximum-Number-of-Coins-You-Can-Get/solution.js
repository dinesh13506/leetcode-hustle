/**
 * @param {number[]} piles
 * @return {number}
 */
 var maxCoins = function(piles) {
    let maxCoins = 0
    piles.sort(function(a,b) {return a - b})
    let i = 0
    let j = piles.length - 1
    while(i < j) {
        let a = piles[i]
        let b = piles[j-1]
        let c = piles[j]
        maxCoins = maxCoins + b
        i++
        j = j - 2 
    }
    return maxCoins
};