/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let prev = new Array(n)
    prev.fill(1)
    for(let i = 1; i < m; i++) {
        let curr = new Array(n)
        curr[0] = 1
        for(let j = 1; j < n; j++) {
            curr[j] = prev[j] + curr[j-1]
        }
        prev = curr
    }
    return prev[n-1]
};