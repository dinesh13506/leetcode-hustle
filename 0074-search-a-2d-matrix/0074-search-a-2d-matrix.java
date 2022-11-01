class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if(matrix.length == 0) {
            return false;
        }
        final int m = matrix.length;
        final int n = matrix[0].length;
        int r = 0, c = n-1;
        while(r < m && c >= 0) {
            if(matrix[r][c] == target) {
                return true;
            } else if(target < matrix[r][c]) {
                c--;
            } else {
                r++;
            }
        }
        return false;
    }
}