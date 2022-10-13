class Solution {
    public int maximalSquare(char[][] matrix) {
        final int m = matrix.length;
        final int n = matrix.length > 0 ? matrix[0].length : 0;
        
        int[] prev = new int[n];
        int max = 0;
        
        for(int i = 0; i < m; i++) {
            int[] curr = new int[n];
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] == '0') {
                    curr[j] = 0;
                } else {
                    curr[j] = 1;
                    if(i > 0 && j > 0)
                        curr[j] = Math.min( Math.min(prev[j-1], prev[j]), curr[j-1]) + 1;
                    max = Math.max(max,curr[j]);  
                }
            }
            prev = curr;
        }
        return max * max;
    }
}