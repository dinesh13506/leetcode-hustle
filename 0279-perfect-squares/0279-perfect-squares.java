class Solution {
    
    HashMap<Integer,Integer> memo;
    int[] squareNums;
    public boolean isSquare(int n) {
        int x = (int) Math.sqrt(n);
        //System.out.println(x);
        return (x * x) == n;
    }
    public int dp(int n, int squareNumCount) {
        //System.out.println(n);
        if(n < 0) {
            return Integer.MAX_VALUE;
        }
        if(n == 0) return 0;
        if(memo.containsKey(n)) return memo.get(n);
        if(isSquare(n))  { 
            memo.put(n,1);
            return memo.get(n);
        }
        int ans = Integer.MAX_VALUE;
        for(int i = 1; i < squareNumCount; i++) {
            if(squareNums[i] <= n) {
                ans = Math.min(ans, 1 + dp(n - squareNums[i], squareNumCount));
            } 
        }
        memo.put(n,ans);
        return memo.get(n);
    }
    public int numSquares(int n) {
        //System.out.println(isSquare(n));
        memo = new HashMap<Integer, Integer>();
        int squareNumCount = (int) Math.sqrt(n) + 1;
        squareNums = new int[squareNumCount];
        for(int i = 1; i < squareNumCount; i++) {
            squareNums[i] = i * i;
        }
        return dp(n,squareNumCount);
    }
}