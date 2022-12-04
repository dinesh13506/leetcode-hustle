class Solution {
    public int minimumAverageDifference(int[] nums) {
        
        final int n = nums.length;
        long[] forward = new long[n];
        long[] backward = new long[n];
        long sum = 0;
        long min = Long.MAX_VALUE;
        int index = -1;
        for(int i = 0; i < n; i++) {
            sum += (long) nums[i];
            forward[i] =  ( sum ) / (long) (i + 1);
        }
        sum = 0;
        for(int i = n - 1; i >=0; i--) {
            sum += (long) nums[i];
            backward[i] =  ( sum ) / (long) (n - i);
        }
        
        for(int i = 0; i < n; i++) {
            long a = forward[i];
            long b = i + 1 < n ? backward[i+1] :  0;
            long diff =  Math.abs(a - b);
            if(min > diff) {
                index = i;
                min = diff;
            }
            //System.out.println(a + " " + b + " " + diff);
        }
        return  index;
    }
}