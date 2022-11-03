class Solution {
    public int smallestCommonElement(int[][] mat) {
        final int m = mat.length;
        final int n = mat[0].length;
        HashSet<Integer> hset = new HashSet<Integer>();
        
        for(int j = 0; j < n; j++) {
            hset.add(mat[0][j]);
        }
        
        for(int i = 1; i < m ; i++) {
            HashSet<Integer> temp = new HashSet<Integer>();
            for(int j = 0; j < n; j++) {
               if(hset.contains(mat[i][j])) {
                   temp.add(mat[i][j]);
               }
            }
            hset = temp;
        }
        
        if(hset.size() == 0) {
            return -1;
        } else {
            int min = Integer.MAX_VALUE;
            for(int value : hset) {
                min = Math.min(value, min);
            }
            return min;
        }
    }
}