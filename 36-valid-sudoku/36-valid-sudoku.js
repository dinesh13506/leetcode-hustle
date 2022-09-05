/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    const n = 9
    let rowSet = new Array(n)
    let colSet = new Array(n)
    let boxSet = new Array(n)
    for(let i = 0; i < n; i++) {
        rowSet[i] = new Set()
        colSet[i] = new Set()
        boxSet[i] = new Set()
    }
    
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[0].length; c++) {
            if(board[r][c] == '.') continue
            
            let value = board[r][c]
            
            if(rowSet[r].has(value)) return false
            rowSet[r].add(value)
            
            if(colSet[c].has(value)) return false
            colSet[c].add(value)
            
            let boxNo = 3 * parseInt(r/3) + parseInt(c/3)
            if(boxSet[boxNo].has(value)) return false
            
            boxSet[boxNo].add(value)
        }
    }
    return true
};