public class Solution{
    int dp[][];
    public int getLengthOfOptimalCompression(String ss, int k) {
        char[] s = ss.toCharArray();
        
        dp = new int[s.length][k + 1];
        for(int[] row : dp) Arrays.fill(row, -1);
        
        int res = dfs(s, 0, k);
        // for(int[] row : dp) System.out.println(Arrays.toString(row));
        return res;
    }
    
    private int dfs(char[] s, int curIdx, int rest) {
        // reach end or we can simply delete all
        if(curIdx == s.length || s.length - curIdx <= rest) return 0;
        
        if(dp[curIdx][rest] != -1) return dp[curIdx][rest];
        
        int[] fre = new int[26];
        int most = 0, res = Integer.MAX_VALUE; // most is the highest frequency
        
        // i - curIdx + 1 - most. count of chars we need to delete
        // but we cannot break. Because when most change, rest could also change.
        // So we must iterate to end
        for(int i = curIdx; i < s.length; i++) {
            int idx = s[i] - 'a';
            fre[idx]++;
            
            most = Math.max(most, fre[idx]);
            if(rest >= i - curIdx + 1 - most) // only recurse when we can delete all other chars
                res = Math.min(res, getLen(most) + 1 + dfs(s, i + 1, rest - (i - curIdx + 1 - most)));
        }
        dp[curIdx][rest] = res;
        return res;
    }
    
    private int getLen(int most) {
        if(most == 1) return 0;
        if(most < 10) return 1;
        if(most < 99) return 2;
        return 3;
    }
}