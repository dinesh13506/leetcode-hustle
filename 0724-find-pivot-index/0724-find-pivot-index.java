class Solution {
    public int pivotIndex(int[] nums) {
        final int n = nums.length;
        int[] sum = new int[n];
        Arrays.fill(sum, 0);
        for(int i = 0; i < n; i++) {
            sum[i] = i > 0 ? sum[i-1]  + nums[i] : nums[i];
        }
        for(int i = 0; i < n; i++) {
            int left_sum = i > 0 ? sum[i-1] : 0;
            int right_sum = sum[n-1] - sum[i];
            if(left_sum == right_sum) {
                return i;
            }
        }
        return -1;
    }
}