class Solution {
    
    public boolean isExit(int i, int j, int m, int n, int[] entrance) {
        if(i == 0 || j == 0 || i == m - 1 || j == n - 1) {
            if(i == entrance[0] && j == entrance[1]) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }
    
    public int nearestExit(char[][] maze, int[] entrance) {
        int[][] dirs = new int[4][2];
        dirs[0] = new int[]{0,1};
        dirs[1] = new int[]{0,-1};
        dirs[2] = new int[]{1,0};
        dirs[3] = new int[]{-1,0};
        int m = maze.length;
        int n = maze[0].length;
        int[][] visited = new int[m][n];
        LinkedList<int[]> queue = new LinkedList<>();
        queue.add(new int[]{entrance[0], entrance[1], 0});
        visited[entrance[0]][entrance[1]] = 1;
        int steps = 0;
        while(queue.size() > 0) {
            int[] point = queue.pollFirst();
            if(isExit(point[0], point[1], m, n, entrance)) {
                return point[2];
            }
            for(int[] d : dirs) {
                int x = point[0] + d[0];
                int y = point[1] + d[1];
                if(x < 0 || y < 0 || x >= m || y >= n || maze[x][y] == '+' || visited[x][y] == 1) {  
                    continue;
                }
                queue.add(new int[]{x, y, point[2] + 1});
                visited[x][y] = 1;
            }
            steps++;
        }
        return -1;
    }
}