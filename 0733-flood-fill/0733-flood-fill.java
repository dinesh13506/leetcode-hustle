class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        final int m = image.length;
        final int n = image[0].length;
        final int[][] dir = new int[][]{{0,1}, {0, -1}, {1, 0}, {-1, 0}};
        final boolean[][] visited = new boolean[m][n];
        final int[][] ans  = new int[m][n];
        for(int r = 0;  r < m;  r++) {
            for(int c = 0; c < n; c++) {
                ans[r][c] = image[r][c];
                visited[r][c] = false;
            }
        }
        LinkedList<int[]> queue = new  LinkedList<int[]> ();
        queue.addLast(new int[]{sr, sc});
        visited[sr][sc] = true;
        while(queue.size() > 0) {
            int[] cell = queue.pollFirst();
            int i = cell[0], j = cell[1];
            int c = image[i][j];
            ans[i][j] = color;
            for(int[] d : dir) {
                int x = i + d[0];
                int y = j + d[1];
                if(x < 0 || x>=m || y < 0 || y >= n ) {
                    continue;
                }
                if(visited[x][y] == false && image[x][y] == c) {
                    visited[x][y] = true;
                    queue.addLast(new int[]{x, y});
                }
            }
        }
        return ans;
    }
}