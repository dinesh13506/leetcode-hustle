class Solution {
    public int maxProfit(int[] prices) {
        final int n = prices.length;
        int[] max_on_right = new int[n];
        int max_till_now = Integer.MIN_VALUE;
        //System.out.println(max_till_now);
        for(int i = n-1; i >=0; i--) {
            max_on_right[i] = max_till_now;
            max_till_now = Math.max(max_till_now, prices[i]);
        }
        
        int max_profit = 0;
        for(int i = 0; i < n - 1; i++) {
            int profit = max_on_right[i] - prices[i];
            if(profit > 0) {
                max_profit = Math.max(max_profit, profit);
            }
        }
        return max_profit;
    }
}