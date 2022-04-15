/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let m = board.length, n = board[0].length
    let backtrack = function(row,col,index) {
        if(index>= word.length) {
            return true
        }
        if(row < 0 || row >= m || col < 0 || col >=n || board[row][col] != word[index]) {
            return false
        }
        
        let ret = false
        let rowOffsets = [0,1,0,-1]
        let colOffsets = [1,0,-1,0]
        board[row][col] = '#'
        for(let d = 0 ; d < 4; d++) {
            ret = backtrack(row+rowOffsets[d],col+colOffsets[d],index+1)
            if(ret) {
                break
            }
        }
        board[row][col] = word[index]
        return ret
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j <n; j++) {
            if(backtrack(i,j,0)) {
                return true
            }
        }
    }
    return false
};