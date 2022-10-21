class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashSet<Integer> hset = new HashSet<Integer>();
        final int n = nums.length;
        for(int i = 0; i < n; i++) {
            if(i - k - 1 >= 0) {
                hset.remove(nums[i-k-1]);
            }
            if(hset.contains(nums[i])) {
                return true;
            } else {
                hset.add(nums[i]);
            }
        }
        return false;
    }
    
}