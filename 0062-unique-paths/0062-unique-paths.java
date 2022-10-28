class Solution {
    public int[][] memo;
    public int ways(int m, int n) {
        for(int r = 1; r < m; r++) {
            for(int c = 1; c < n; c++) {
                memo[r][c] = memo[r-1][c] + memo[r][c-1];
            }
        }
        return memo[m-1][n-1];
    }
    
    public int uniquePaths(int m, int n) {
        memo = new int[m][n];
        Arrays.stream(memo).forEach(row -> Arrays.fill(row, 1));
        return ways(m, n);
    }
}