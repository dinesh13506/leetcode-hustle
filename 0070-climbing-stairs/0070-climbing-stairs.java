class Solution {
    
    HashMap<Integer, Integer> memo;
    
    public int ways(int i) {
        if(i == 0) {
            return 0;
        }
        if(i == 1) {
            return 1;
        }
        if(i == 2) {
            return 2;
        }
        if(memo.get(i) != null) return memo.get(i);
        memo.put(i, ways(i-1) + ways(i-2));
        return memo.get(i);
    }
    public int climbStairs(int n) {
        memo = new  HashMap<Integer, Integer>();
        return ways(n);
    }
}