class Solution {
    public int maximalSquare(char[][] matrix) {
        final int m = matrix.length;
        final int n = matrix.length > 0 ? matrix[0].length : 0;
        
        int[][] dp = new int[m][n];
        int max = 0;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] == '0') {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = 1;
                    if(i > 0 && j > 0)
                        dp[i][j] = Math.min( Math.min(dp[i-1][j-1], dp[i-1][j]), dp[i][j-1]) + 1;
                    max = Math.max(max,dp[i][j]);  
                }
            }
        }
        return max * max;
            
    }
}