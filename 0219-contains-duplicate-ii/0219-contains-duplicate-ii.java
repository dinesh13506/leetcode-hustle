class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashSet<Integer> hset = new HashSet<Integer>();
        final int n = nums.length;
        //first window
        for(int i = 0; i < Math.min(k + 1, n); i++) {
            if(hset.contains(nums[i])) {
                return true;
            }
            hset.add(nums[i]);
        }
        for(int i = k + 1; i < n; i++) {
            int j = i - k - 1;
            hset.remove(nums[j]);
            if(hset.contains(nums[i])) {
                return true;
            }
            hset.add(nums[i]);
        }
        return false;
    }
}