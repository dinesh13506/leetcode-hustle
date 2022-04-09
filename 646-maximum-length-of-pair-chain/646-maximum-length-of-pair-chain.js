/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort(function(a,b) { return a[1] - b[1]})
    let c = 1
    let prevEnd = pairs[0][1]
    for(let i = 1; i < pairs.length; i++) {
        let start = pairs[i][0]
        let end =  pairs[i][1]
        if(start > prevEnd) {
            c++
            prevEnd = end
        }
    }
    return c
};