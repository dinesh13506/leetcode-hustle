/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    
    let min = Math.min(...nums)
    
    let ops = 0
    for(let num of nums) {
        ops += (num - min)
    }
    return ops
};