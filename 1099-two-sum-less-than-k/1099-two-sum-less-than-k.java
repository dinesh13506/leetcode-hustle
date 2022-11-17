class Solution {
    public int twoSumLessThanK(int[] nums, int k) {
        int n = nums.length;
        int ans = Integer.MIN_VALUE;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                if(nums[i] + nums[j] < k) {
                    ans = Math.max(ans, nums[i] + nums[j]);
                }
            }
        }
        if(ans == Integer.MIN_VALUE) return -1;
        return ans;
    }
}