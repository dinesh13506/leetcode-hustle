class Solution {
    public int smallestCommonElement(int[][] mat) {
        final int m = mat.length;
        final int n = mat[0].length;
        HashMap<Integer, Integer> hmap = new HashMap<Integer, Integer>();
        for(int i = 0; i < m ; i++) {
            for(int j = 0; j < n; j++) {
               hmap.put(mat[i][j], hmap.getOrDefault(mat[i][j] , 0) + 1);
            }
        }
        int min = Integer.MAX_VALUE;
        for(int key : hmap.keySet()) {
            if(hmap.get(key) >= m) {
                min = Math.min(min, key);
            }
        }
        return min == Integer.MAX_VALUE ? -1 : min;
        
    }
}