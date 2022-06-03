/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    let m = matrix.length
    let n = matrix[0].length
    
    this.prefix = new Array(m)
    for(let i = 0; i < m; i++) {
        this.prefix[i] = new Array(n)
        this.prefix[i].fill(0)
    }
    //row wise
    for(let i = 0; i < m; i++) {
        let sum = 0
        for(let j= 0; j < n; j++) {
            sum = sum + matrix[i][j]
            this.prefix[i][j] = sum
        }
    }
    
    //col wise
    for(let j= 0; j < n; j++) {
        let sum = 0
        for(let i = 0; i < m; i++) {
            sum = sum + this.prefix[i][j]
            this.prefix[i][j] = sum
        }
    }
            
    //console.log(this.prefix)
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
   
    //console.log(this.prefix[row2][col2], this.prefix[row2][col1], this.prefix[row1][col2])
    let sum = this.prefix[row2][col2] - this.prefix[row2][col1] - this.prefix[row1][col2] + this.prefix[row1][col1]
    for(let j = col1; j <= col2; j++) {
        sum = sum + this.matrix[row1][j]
    }
    for(let i = row1; i <= row2; i++) {
         sum = sum + this.matrix[i][col1]
    }
    return sum - this.matrix[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */