/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(pathLen) {
    
    let m = 4, n = 3
    let total = 0
    const mod = 1000000007
    
    let memo = new Array(m)
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n)
        for(let j = 0; j < n; j++) {
            let arr = new Array(pathLen+1)
            arr.fill(-1)
            memo[i][j] = arr
        }
    }
    let paths = (i,j, len) => {
        if(i < 0 || j < 0 || i >=m || j >= n || (i == 3 && j!= 1)) {
            return 0
        }
        
        if(len <= 0) {
            return 0
        }
        if(len == 1) {
            return 1
        }
        
        if(memo[i][j][len] != -1) {
            return memo[i][j][len]
        }
        
        let ans = paths(i - 1, j - 2, len - 1) % mod + // jump to a
            paths(i - 2, j - 1, len - 1) % mod + // jump to b
            paths(i - 2, j + 1, len - 1) % mod + // jump to c
            paths(i - 1, j + 2, len - 1) % mod + // jump to d
            paths(i + 1, j + 2, len - 1) % mod + // jump to e
            paths(i + 2, j + 1, len - 1) % mod + // jump to f
            paths(i + 2, j - 1, len - 1) % mod + // jump to g
            paths(i + 1, j - 2, len - 1) % mod; // jump to h
        
        memo[i][j][len] = ans
        return ans
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            total = (total + paths(i,j,pathLen))% mod
        }
    }
    //console.log(memo)
    return total  
};