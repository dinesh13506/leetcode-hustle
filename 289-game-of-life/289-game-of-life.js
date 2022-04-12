/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length, n = board[0].length
    let future = new Array(m)
    for(let i = 0; i < m; i++) {
        future[i] = new Array(n)
        future[i].fill(0)
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            //calculate neighbours of [i,j]
            let aliveNeighbours = 0
            for(let x = -1; x<=1; x++) {
                for(let y = -1; y<=1; y++) {
                    if( (i+x >=0 && i+x < m) && (j+y>=0 && j+y < n)) {
                        aliveNeighbours = aliveNeighbours + board[i+x][j+y]
                    }
                }
            }
            aliveNeighbours = aliveNeighbours - board[i][j]
            if( (board[i][j] == 1) && (aliveNeighbours < 2)) {
                future[i][j] = 0
            }
            else if( (board[i][j] == 1) && (aliveNeighbours > 3)) {
                future[i][j] = 0
            }
            else if( (board[i][j] == 0) && (aliveNeighbours == 3)) {
                future[i][j] = 1
            } else {
                future[i][j] = board[i][j]
            }
        }
    }
    for(let i = 0; i< m; i++) {
        for(let j = 0; j < n; j++) {
            board[i][j] = future[i][j]
        }
    }
};