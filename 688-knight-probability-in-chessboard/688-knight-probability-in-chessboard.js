/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    
    const dirs = [
        [-2,-1],
        [-2,1],
        [-1, -2],
        [-1,2],
        [1,-2],
        [1,2],
        [2,-1],
        [2,1]
    ]
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(n)
        for(let j = 0; j < n; j++) {
            memo[i][j] = new Array(k+1)
            memo[i][j].fill(-1)
        }
    }
    
    let dfs = (i, j , move) => {
        if(i < 0 || i >= n || j < 0 || j >= n) {
            return 0
        }
        if(move == 0) {
            return 1
        }
        
        if(memo[i][j][move] != -1) {
            return memo[i][j][move]
        }
        
        let total = 0
        for(let dir of dirs) {
            total += dfs(i + dir[0], j + dir[1], move-1)
        }
        
        memo[i][j][move] =  total / 8 
        return memo[i][j][move]
    }
    
    return dfs(row, column, k)
};