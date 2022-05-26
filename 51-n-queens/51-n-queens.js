/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
   return solveNQueensBySimple(n)
};


let solveNQueensBySimple = function (n) {
        let result = []
    let board = new Array(n)
    for(let i = 0; i < n; i++) {
        board[i] = new Array(n)
        board[i].fill('.')
    }
    
    let canPlace = function(row, col) {
        let i = row, j = col
        
        while(j>=0) {
            if(board[i][j] == 'Q') {
                return false
            }
            j--
        }
        i = row, j = col
        while(i>=0 && j >=0) {
            if(board[i][j] == 'Q') {
                return false
            }
            i--
            j--
        }
        i = row, j = col
        while( i < n && j >=0) {
            if(board[i][j] == 'Q') {
                return false
            }
            i++
            j--
        }
        return true
    }
    
    let f = function(col, board) {
        
        if(col == n) {
            //console.log(board.slice())
            let temp = []
            for(let i = 0; i < n; i++) {
                temp.push(board[i].join(''))
            }
            result.push(temp)
            return
        }
        
        for(let row = 0; row < n; row++) {
            if(canPlace(row, col) == true) {
                board[row][col] = 'Q'
                f(col+1, board)
                board[row][col] = '.'
            }
        }
    }
    
    
    f(0, board)
    return result
}