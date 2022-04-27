/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    
    let m = board.length, n = board[0].length
    let dfsUtil = function(row,col) {
        if(row >= m || col >=n) {
            return
        }
        if(board[row][col] != 'X') {
            return 
        }
        
        board[row][col] = 'Z'
        dfsUtil(row+1, col)
        dfsUtil(row, col+1)
    }
    
    let ans = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j <n; j++) {
            if(board[i][j] == 'X') {
                ans++
                dfsUtil(i,j)
            }
        }
    }
    return ans
};