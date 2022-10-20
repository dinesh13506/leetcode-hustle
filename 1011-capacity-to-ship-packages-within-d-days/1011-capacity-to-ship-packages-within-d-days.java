class Solution {
    public boolean isPossible(int[] weights, int days, int capacity) {
        int d = 1;
        int sum = 0;
        for(int wt : weights) {
            if(sum + wt > capacity) {
                d++;
                sum = 0;
            }
            sum += wt;
        }
        return d <= days ? true : false;
    }
    public int shipWithinDays(int[] weights, int days) {
        final int n = weights.length;
        int min_capacity = Integer.MIN_VALUE;
        int max_capacity = 0;
        for(int wt : weights) {
            max_capacity += wt;
            min_capacity = min_capacity < wt ? wt : min_capacity;
        }
        
        int low = min_capacity, high = max_capacity, ans = max_capacity;
        
        while(low <= high) {
            int capacity = low + ( (high - low) / 2 );
            if( isPossible(weights, days, capacity) == true) {
                ans = ans > capacity ? capacity : ans;
                high = capacity - 1;
            } else {
                low = capacity + 1;
            }
        }
        return ans;
        
    }
}