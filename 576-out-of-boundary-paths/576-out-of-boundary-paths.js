/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    
    
    let memo = new Array(m)
    for(let i = 0 ; i < m; i++) {
        memo[i] = new Array(n)
        for(let j = 0; j < n; j++) {
            memo[i][j] = new Array(maxMove+1)
            memo[i][j].fill(-1n)
        }
    }
    
    let mod = BigInt(1000000007)
    let dfs = (i, j, move) => {
        if(move < 0) {
            return 0
        }
        if(i < 0 || i >=m || j < 0 || j >= n) {
            return 1
        }
        
        if(memo[i][j][move] != -1) {
            return memo[i][j][move]
        }
        
        let v1 = BigInt(dfs(i + 1, j , move - 1))
        let v2 = BigInt(dfs(i , j + 1, move - 1))
        let v3 = BigInt(dfs(i - 1, j , move - 1))
        let v4 = BigInt(dfs(i , j - 1, move - 1))
        
        memo[i][j][move] =  BigInt(v1 + v2 + v3 + v4) % mod
        return memo[i][j][move]
    } 
    
    return dfs(startRow, startColumn,maxMove)
};