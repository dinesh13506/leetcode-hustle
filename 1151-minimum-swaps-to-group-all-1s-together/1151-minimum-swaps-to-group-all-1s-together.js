/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    
    let n = data.length
    let ones = 0
    for(let num of data) {
        if(num === 1) {
            ones++
        }
    }
    
    let minSwaps = Infinity
    let zeroes = 0
    for(let i = 0; i < ones; i++) {
        if(data[i] === 0) {
            zeroes++
        }
    }
    minSwaps = Math.min(Infinity, zeroes)
    let j = 1
    while(j <= n - ones) {
        zeroes = zeroes + (data[j-1] == 0 ? -1 : 0) + (data[j + ones - 1] == 1 ? 0 : 1)
        minSwaps = Math.min(minSwaps, zeroes)
        j++
    }
    
    return minSwaps
};