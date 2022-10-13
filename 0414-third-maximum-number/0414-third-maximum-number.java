class Solution {
    public int thirdMax(int[] nums) {
        final long low = Long.MIN_VALUE;
        long first = low, second = low, third = low;
        final int n = nums.length;
        for(int i = 0; i < n; i++) {
            long curr = (long) nums[i];
            if(curr > first) {
                third = second;
                second = first;
                first = curr;
            } else if(curr < first && curr > second) {
                third = second;
                second = curr;
            } else if(curr < second && curr > third) {
                third = curr;
            }
        }
        
        return third == low ? (int) first : (int) third;
        
    }
}