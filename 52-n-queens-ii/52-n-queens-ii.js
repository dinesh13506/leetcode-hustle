/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
    return totalNQueensSimple(n)
};

let totalNQueensSimple = function(n) {
    let board = new Array(n)
    for(let i = 0; i < n; i++) {
        board[i] = new Array(n)
        board[i].fill('.')
    }
    
    let canAttack = function(row, col) {
        let i = row, j = col
        while(j >= 0 ) {
            if(board[i][j] == 'Q') {
                return true
            }
            j--
        }
        
        i = row
        j = col
        while( i >=0 && j >= 0) {
            if(board[i][j] == 'Q') {
                return true
            }
            i--
            j--
        }
        
        i = row
        j = col
        while( i < n && j >= 0) {
            if(board[i][j] == 'Q') {
                return true
            }
            i++
            j--
        }
        return false
    }
    
    let ways = 0
    
    let f = function(col, board) {
        
        if(col == n) {
            ways++
            return
        }
        for(let row = 0; row < n; row++) {
            if(canAttack(row,col) == false) {
                board[row][col] = 'Q'
                f(col+1, board)
                board[row][col] = '.'
            }
        }
    }
    
    f(0, board)
    return ways
}