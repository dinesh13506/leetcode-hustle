class Solution {
    public int orangesRotting(int[][] grid) {
        final int VISITED = -1;
        final int m = grid.length;
        final int n = grid[0].length;
        
        Queue<int[]> queue = new LinkedList<int[]>();
        for(int r = 0;  r < m; r++) {
            for(int c = 0; c < n; c++) {
                if(grid[r][c] == 2) {
                    queue.add(new int[]{r,c});
                    grid[r][c] = VISITED;
                }
            }
        }
        
        final int[][] dirs = new int[][]{
            {1,0},
            {0,1},
            {-1, 0},
            {0, -1}
        };
        
        int time = 0;
        while(queue.size() > 0) {
            int size = queue.size();
            for(int i = 0; i < size; i++) {
                int[] pos = queue.poll();
                for(int[] d : dirs) {
                    int x = pos[0] + d[0];
                    int y = pos[1] + d[1];
                    if(x < 0 || y < 0 || x >=m || y >= n || grid[x][y] != 1) {
                        continue;
                    }
                    if(grid[x][y] == 1) {
                        queue.add(new int[]{x,y});
                        grid[x][y] = VISITED;
                    }
                }
            }
            time++;
        }
        for(int r = 0;  r < m; r++) {
            for(int c = 0; c < n; c++) {
                if(grid[r][c] == 1) {
                    return -1;
                }
            }
        }
        return time > 0 ? time - 1 : 0;
        
    }
}