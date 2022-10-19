class Solution {
    public int firstMissingPositive(int[] nums) {
        Map<Integer, Boolean> map = new HashMap<Integer, Boolean>();
        final int n = nums.length;
        int max = 0;
        for(int i = 0; i < n; i++) {
            if(nums[i] < n + 1 && nums[i] > 0) {
                if(nums[i] > max) max = nums[i];
                map.put(nums[i], true);
            }
        }
        
        for(int ans = 1; ans <= max; ans++) {
            if(map.containsKey(ans) == false) {
                return ans;
            }
        }
        return max + 1;
    }
}