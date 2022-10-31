class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        final int m = matrix.length;
        final int n = matrix[0].length;
        
        //
        for(int i = 0; i < m; i++) {
            int r = i, c = 0;
            int prev = -1;
            while(r < m && c < n) {
                if(prev == -1) {
                    prev = matrix[r][c];
                } else if(matrix[r][c] != prev) {
                    return false;
                }
                r++;
                c++;
                    
            }
        }
        
        for(int j = 1; j < n; j++) {
            int c = j, r = 0;
            int prev = -1;
            while(r < m && c < n) {
                if(prev == -1) {
                    prev = matrix[r][c];
                } else if(matrix[r][c] != prev) {
                    return false;
                }
                r++;
                c++;
                    
            }
        }
        return true;
    }
}