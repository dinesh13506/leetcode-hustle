class Point {
    private int x;
    private int y;
    
    public Point(int a, int b) {
        x = a;
        y = b;
    }
    
    public int getX() {
        return this.x;
    }
    public int getY() {
        return this.y;
    }
}

class Solution {
    
    public void dfs(HashMap<Point, Boolean> visited, Point point, HashMap<Point, ArrayList<Point>> neighbors) {
        if(visited.get(point) == true) {
            return;
        }
        visited.put(point, true);
        for(var neighbor : neighbors.get(point)) {
            dfs(visited, neighbor, neighbors);
        }
    }
    public int removeStones(int[][] stones) {
        final int n = stones.length;
        var neighbors = new HashMap<Point, ArrayList<Point>>();
        var points = new ArrayList<Point>();
        var visited = new HashMap<Point, Boolean>();
        for(var i = 0; i < n; i++) {
            points.add(new Point(stones[i][0], stones[i][1]));
            visited.put(points.get(i), false);
        }
        for(var i = 0; i < n; i++) {
            Point p1 = points.get(i);
            neighbors.put(p1, new ArrayList<>());
            for(var j = 0; j < n; j++) {
                if(i != j) {
                    Point p2 = points.get(j);
                    if(p1.getX() == p2.getX() || p1.getY() == p2.getY()) {
                        neighbors.get(p1).add(p2);
                    }
                }
            }
        }
        
        /*
        //System.out.println(neighbors);
        for(var point: neighbors.keySet()) {
            System.out.println(point.getX() + "," + point.getY());
            for(var nbr : neighbors.get(point)) {
                System.out.print(nbr.getX() + " " + nbr.getY() + "\n");
            }
            System.out.println();
        }
        */
       
       int components = 0;
       for(var i = 0; i < n; i++) {
           if(visited.get(points.get(i)) != true) {
               dfs(visited,points.get(i),neighbors );
               components++;
           }
       }
        //System.out.println(components);
        return n - components;
    }
}