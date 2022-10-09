class Solution {
    public boolean hasPath(int[][] maze, int[] start, int[] dest) {
        final int m = maze.length;
        final int n = maze[0].length;
        ArrayList<int[]> directions = new ArrayList();
        directions.add(new int[]{-1,0});
        directions.add(new int[]{1, 0});
        directions.add(new int[]{0,-1});
        directions.add(new int[]{0, 1});
        
        Queue<int[]> queue = new LinkedList<int[]>();
        int[][] distance = new int[m][n];
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                distance[i][j] = Integer.MAX_VALUE;
            }
        }
        
        queue.add(new int[] {start[0], start[1]});
        distance[start[0]][start[1]] = 0;
        while(queue.isEmpty() == false) {
            int[] node = queue.poll();
            int x = node[0];
            int y = node[1];
            for(int[] dir : directions) {
                int a = x;
                int b = y;
                int count = 0;
                while(true) {
                    int newa = a + dir[0];
                    int newb = b + dir[1];
                    if(newa < 0 || newb <0 || newa >= m || newb >= n) {
                        break;
                    }
                    if(maze[newa][newb] == 1) {
                        break;
                    }
                    a = newa;
                    b = newb;
                    count++;
                }
                if(distance[x][y] + count < distance[a][b]) {
                    distance[a][b] = distance[x][y] + count;
                    queue.add(new int[] {a,b});
                }
            }
        }
        return distance[dest[0]][dest[1]] == Integer.MAX_VALUE ? false : true;
    }
}