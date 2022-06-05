/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
    
    let ways = 0
    let board = new Array(n)
    for(let i = 0; i < n; i++) {
        board[i] = new Array(n)
        board[i].fill(0)
    }
    
    let canPlace = function(row,col) {
        
        let i = row, j = col
        while(j >=0) {
            if(board[i][j] == 'Q') {
                return false
            }
            j--
        }
        i = row, j = col
        while(i >=0 && j >=0) {
            if(board[i][j] == 'Q') {
                return false
            }
            j--
            i--
        }
        
        i = row, j = col
        while(i < n && j >=0) {
            if(board[i][j] == 'Q') {
                return false
            }
            j--
            i++
        }
        
        return true
    }
    
    
    let solve = function(col) {
        if(col == n) {
            ways++
            return
        }
        for(let i = 0; i < n; i++) {
            if(canPlace(i,col)) {
                board[i][col] = 'Q'
                solve(col+1)
                board[i][col] = 0
            }
        }
    }
    
    solve(0)
    return ways
    
    
};