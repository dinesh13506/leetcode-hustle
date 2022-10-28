class Solution {
    public int[][] memo;
    public int ways(int i, int j) {
        if(i < 0 || j < 0) {
            return 0;
        }
        if(i == 0 && j == 0) {
            return 1;
        }
        if(memo[i][j] != 0) {
            return memo[i][j];
        }
        memo[i][j] =  ways(i-1, j) + ways(i, j-1);
        return memo[i][j];
    }
    
    public int uniquePaths(int m, int n) {
        memo = new int[m][n];
        Arrays.stream(memo).forEach(row -> Arrays.fill(row, 0));
        return ways(m-1, n-1);
    }
}