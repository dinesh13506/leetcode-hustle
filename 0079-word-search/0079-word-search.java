class Solution {
    public void init(boolean [][] visited, int m, int n) {
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                visited[i][j] = false;
            }
        }
    }
    
    public boolean search(String word, int idx, boolean [][] visited,char[][] board, int i, int j, int m, int n) {
        if(idx >= word.length()) {
            return true;
        }
        if(i < 0 || j < 0 || i >= m || j >= n || visited[i][j] == true) {
            return false;
        }
        if(word.charAt(idx) != board[i][j]) {
            return false;
        }
        visited[i][j] = true;
        int[][] dirs = new int[][]{{0,1},{1,0},{0,-1},{-1,0}};
        boolean ans = false;
        for(int[] dir : dirs) {
            int x = i + dir[0];
            int y = j + dir[1];
            ans = search(word, idx + 1, visited, board, x, y, m ,n);
            if(ans) break;
        }
        visited[i][j] = false;
        return ans;
    }
    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;
        boolean [][] visited = new boolean[m][n];
        for(int r = 0;  r < m; r++) {
            for(int c = 0; c < n; c++) {
                init(visited, m, n);
                boolean ans = search(word, 0 , visited, board, r, c, m ,n);
                if(ans) return true;
            }
        }
        return false;
    }
}