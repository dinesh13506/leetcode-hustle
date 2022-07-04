/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    
    let n = ratings.length
    let candies = new Array(n)
    candies.fill(1)
    
    for(let i = 1; i < n; i++) {
        let leftNeighbour = i - 1
        if(ratings[i] > ratings[leftNeighbour]) {
            candies[i] = Math.max(candies[i], candies[leftNeighbour] + 1)
        }
    }
    
    for(let i = n-2; i >= 0; i--) {
        let rightNeighbour = i + 1
        if(ratings[i] > ratings[rightNeighbour]) {
            candies[i] = Math.max(candies[i], candies[rightNeighbour] + 1)
        }
    }
    
    let total = 0
    for(let num of candies) {
        total += num
    }
    return total
};