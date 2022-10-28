class Solution {
    public int[] cost;
    public int n;
    public HashMap<Integer, Integer> memo;
    
    public int dp(int i) {
        if(i == 0 || i == 1) {
            return 0;
        }
        if(memo.get(i) != null) return memo.get(i);
        int cost1 = cost[i-1] + dp(i-1);
        int cost2 = cost[i-2] + dp(i-2);
        memo.put(i,  Math.min(cost1, cost2));
        return memo.get(i);
        
    }
    public int minCostClimbingStairs(int[] cost) {
        memo = new HashMap<Integer, Integer>();
        this.cost = cost;
        n = cost.length;
        return dp(n);
    }
}