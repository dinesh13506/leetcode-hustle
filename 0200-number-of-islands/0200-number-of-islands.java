class Solution {
    public char[][] grid;
    public boolean[][] visited;
    public int[][] dir = new int[][]{{-1,0},{1,0},{0, -1}, {0,1}};
    public int m;
    public int n;
    
    public void dfs(int r, int c) {
        if(visited[r][c] == true) {
            return;
        }
        visited[r][c] = true;
        for(int[] d : dir) {
            int x = r + d[0];
            int y = c + d[1];
            if(x < 0 || x >= m || y < 0 || y >= n) {
                continue;
            }
            if(grid[x][y] == '1' && visited[x][y] == false) {
                dfs(x,y);
            }
        }
        
    }
    
    public int numIslands(char[][] grid) {
        this.grid = grid;
        m = grid.length;
        n = grid[0].length;
        visited = new boolean[m][n];
        Arrays.stream(visited).forEach(row -> Arrays.fill(row, false));
        
        int islands = 0;
        for(int r = 0 ; r < m; r++) {
            for(int c = 0; c < n; c++) {
                if(visited[r][c] == false && grid[r][c] == '1') {
                    islands++;
                    dfs(r, c);
                }
            }
        }
        return islands;
        
    }
}