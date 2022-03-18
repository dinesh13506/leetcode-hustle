/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    
    let result = new Array(n+1)
    result[0] = 0
    for(let x=1; x<=n ;x++) {
        let num = x & (x-1) //set's rightmost 1 bit as 0 or set bit 1 nearby to right end to 0
        result[x] = result[num] + 1
    }
    return result
};