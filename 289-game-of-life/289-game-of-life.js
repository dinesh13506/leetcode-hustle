/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length, n = board[0].length
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            //calculate neighbours of [i,j]
            let aliveNeighbours = 0
            for(let x = -1; x<=1; x++) {
                for(let y = -1; y<=1; y++) {
                    if( (i+x >=0 && i+x < m) && (j+y>=0 && j+y < n) && Math.abs(board[i+x][j+y]) === 1) {
                        aliveNeighbours = aliveNeighbours + 1
                    }
                }
            }
            aliveNeighbours = aliveNeighbours - board[i][j]
            if( (board[i][j] == 1) && (aliveNeighbours < 2)) {
                board[i][j] = -1
            }
            else if( (board[i][j] == 1) && (aliveNeighbours > 3)) {
                board[i][j] = -1
            }
            else if( (board[i][j] == 0) && (aliveNeighbours == 3)) {
                board[i][j] = 2
            } else {
                board[i][j] = board[i][j]
            }
        }
    }
    for(let i = 0; i< m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] == -1) {
                board[i][j] = 0
            } else if(board[i][j] == 2) {
                board[i][j] = 1
            }
        }
    }
};