/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let swap = (i,j) => {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
    
    let output = [];
    for(let j = 0; j < cols; j++) {
        let col = []
        for(let i = 0; i < rows; i++) {
            col.push(matrix[i][j]);
        }
        output.push(col);
    }
    return output;
};