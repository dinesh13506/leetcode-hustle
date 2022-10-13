/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    
    let dp = new Array(m);
    for(let r = 0; r < m;  r++) {
        dp[r] = new Array(n);
        dp[r].fill(0);
    }


    let max = 0;
    
    for(let r = 0; r < m;  r++) {
        for(let c = 0; c < n; c++) {
            if(matrix[r][c] == 1) {
                dp[r][c] = 1
                max = Math.max(max, dp[r][c])
            }
            if(r > 0 && c > 0) {
                if( matrix[r][c] == '1') {
                    dp[r][c] = 1 + Math.min(dp[r-1][c-1], Math.min(dp[r-1][c], dp[r][c-1]))
                }
                max = Math.max(max, dp[r][c])
            }
        }
    }
    //console.log(dp)
    
    
    return max * max
    
    
};