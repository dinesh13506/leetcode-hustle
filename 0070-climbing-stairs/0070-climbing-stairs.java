class Solution {
    
    HashMap<Integer, Integer> memo;
    
    public int ways(int n) {
        int a = 1;
        int b = 2;
        if(n == 1 ) return a;
        if(n == 2) return b;
        for(int i = 3; i <= n; i++) {
            int ways = a + b;
            a = b;
            b = ways;
        }
        return b;
    }
    public int climbStairs(int n) {
        memo = new  HashMap<Integer, Integer>();
        return ways(n);
    }
}