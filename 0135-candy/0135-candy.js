/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length
    let candyCount = new Array(n);
    candyCount.fill(1);
    
    //left to right
    for(let i = 1; i < n; i++) {
        let leftRating = ratings[i-1];
        if(ratings[i] > leftRating) {
            candyCount[i] = Math.max(candyCount[i], candyCount[i-1] + 1);
        }
    }
    
    //right to left
    for(let i = n-2; i >=0; i--) {
        let rightRating = ratings[i+1];
        if(ratings[i] > rightRating) {
            candyCount[i] = Math.max(candyCount[i], candyCount[i+1] + 1);
        }
    }
    
    let sum = 0;
    for(let count of candyCount) sum += count;
    
    return sum;
    
    
};