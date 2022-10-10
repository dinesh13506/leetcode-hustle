class Solution {
    public int maxSubArray(int[] nums) {
        final int n = nums.length;
        int curSum = 0;
        int maxSum = Integer.MIN_VALUE;
        for(int i = 0; i < n; i++) {
            curSum += nums[i];
            maxSum = Math.max(curSum, maxSum);
            if(curSum < 0) {
                curSum = 0;
            }
        }
        return maxSum;
    }
}