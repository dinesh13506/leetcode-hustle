/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let ans = n%2 == 0 ? [] : [0]
    let c = 1
    while(ans.length < n) {
        ans.push(-1 * c)
        ans.push(c)
        c++
    }
    return ans
};