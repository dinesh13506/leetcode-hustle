/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    
    let x = m, y = n
    for(let op of ops) {
        x = Math.min(x, op[0])
        y = Math.min(y, op[1])
    }
    return x * y
};