class Solution {
    boolean[] visited;
    Map<Integer, ArrayList<Integer>> adjList;
    
    public void prepareAdjList(int[][] roads) {
        for(int[] road : roads) {
            int u = road[0], v = road[1];
            if(adjList.containsKey(u) == false) {
                adjList.put(u, new ArrayList<Integer>());
            }
            if(adjList.containsKey(v) == false) {
                adjList.put(v, new ArrayList<Integer>());
            }
            adjList.get(u).add(v);
            adjList.get(v).add(u);
        }
    }
    
    public void dfs(int u) {
        if(visited[u] == true) {
            return;
        }
        visited[u] = true;
        for(int v : adjList.get(u)) {
            dfs(v);
        }
    }
    public int minScore(int n, int[][] roads) {
        visited = new boolean[n+1];
        adjList = new HashMap< Integer, ArrayList<Integer>>();
        prepareAdjList(roads);
        dfs(1);
        int ans = Integer.MAX_VALUE;
        for(int[] road : roads) {
            int u = road[0], v = road[1];
            if(visited[u] && visited[v] && road[2] < ans) {
                ans = road[2];
            }
        }
        return ans;
    }
}