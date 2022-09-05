/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    
    let solved = false
    const N = 9
    let rset = new Array(N)
    let cset = new Array(N)
    let bset = new Array(N)
    
    for(let i = 0; i < N; i++) {
        rset[i] = new Set()
        cset[i] = new Set()
        bset[i] = new Set()
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] == '.')  { 
                continue
            }
            let numVal = parseInt(board[i][j])
            rset[i].add(numVal)
            cset[j].add(numVal)
            let boxNo = 3 * parseInt(i/3) + parseInt(j/3)
            bset[boxNo].add(numVal)
        }
    }
    
    
    
    let canPlace = (r,c,digit) => {
        if(rset[r].has(digit)) return false
        if(cset[c].has(digit)) return false
        let boxNo = 3 * parseInt(r/3) + parseInt(c/3)
        if(bset[boxNo].has(digit)) return false
        return true
    }
    
    let add = (r, c, digit) => {
        rset[r].add(digit)
        cset[c].add(digit)
        let boxNo = 3 * parseInt(r/3) + parseInt(c/3)
        bset[boxNo].add(digit)
        board[r][c] = digit + ""
    }
    
    let rollback = (r,c,digit) => {
        rset[r].delete(digit)
        cset[c].delete(digit)
        let boxNo = 3 * parseInt(r/3) + parseInt(c/3)
        bset[boxNo].delete(digit)
        board[r][c] = "."
    }
    
    let addNext = (i,j) => {
        if(i == N-1 && j == N-1) {
            solved = true
        }
        else {
            if(j == N-1) {
                backtrack(i+1, 0)
            }
            else {
            backtrack(i, j+1)
            }
        }
    }
    
    let backtrack = (i,j) => {
        if(board[i][j] == ".") {
            for(let digit = 1;  digit <= 9;  digit++) {
                if(canPlace(i,j,digit)) {
                    add(i,j,digit)
                    addNext(i,j)
                    if(solved == false) {
                        rollback(i,j,digit)
                    }
                }
            }
        } else {
            addNext(i,j)
        }
    }
    backtrack(0,0)
};