/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = [];
    const m = matrix.length;
    if (m === 0) return 0;
    const n = matrix[0].length;
    
    let max = 0;
    
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
    }
    
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0;
    }
    
    for (let i = 1; i <= m; i++) {
        dp[i][0] = 0;
    }
    
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // if the current matrix cell equals 1
            if (matrix[i - 1][j - 1] === '1') {
                const min = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                dp[i][j] = min + 1;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
            
        }
    }
    
    return max * max;
};