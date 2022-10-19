class Solution {
    public int firstMissingPositive(int[] nums) {
        Set<Integer> set = new HashSet<Integer>();
        final int n = nums.length;
        int max = 0;
        for(int i = 0; i < n; i++) {
            if(nums[i] < n + 1 && nums[i] > 0 && set.contains(nums[i]) == false) {
                if(nums[i] > max) max = nums[i];
                set.add(nums[i]);
            }
        }
        
        for(int ans = 1; ans <= max; ans++) {
            if(set.contains(ans) == false) {
                return ans;
            }
        }
        return max + 1;
    }
}