/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    
    let n = s.length
    let revs = s.split('').reverse().join('')
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n)
        memo[i].fill(-1)
    }
    let lcs = function(index1, index2) {
        
        if(index1 < 0 || index2 < 0) {
            return 0
        }
        if(memo[index1][index2] != -1) {
            return memo[index1][index2]
        }
        if(s[index1] === revs[index2]) {
            memo[index1][index2] =  1 + lcs(index1 - 1, index2 - 1)
        } else {
            memo[index1][index2] =  Math.max(lcs(index1-1, index2), lcs(index1, index2-1))
        }
        return  memo[index1][index2]
    }
    
    let ans = lcs(n-1, n-1)
    //console.log(ans)
    return n - ans
};