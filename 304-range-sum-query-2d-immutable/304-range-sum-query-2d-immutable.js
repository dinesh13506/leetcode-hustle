/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    let m = matrix.length
    let n = matrix[0].length
    
    this.prefix = new Array(m+1)
    for(let i = 0; i <= m; i++) {
        this.prefix[i] = new Array(n+1)
        this.prefix[i].fill(0)
    }
    //row wise
    for(let i = 1; i <= m; i++) {
        let sum = 0
        for(let j= 1; j <= n; j++) {
            sum = sum + matrix[i-1][j-1]
            this.prefix[i][j] = sum
        }
    }
    
    //col wise
    for(let j= 1; j <= n; j++) {
        let sum = 0
        for(let i = 1; i <= m; i++) {
            sum = sum + this.prefix[i][j]
            this.prefix[i][j] = sum
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
   
    row1++
    col1++
    row2++
    col2++
    let sum = this.prefix[row2][col2] - ( this.prefix[row2][col1-1]) - (this.prefix[row1-1][col2]) + (this.prefix[row1-1][col1-1])
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */