class Solution {
    public boolean increasingTriplet(int[] nums) {
        int n = nums.length;
        int[] left = new int[n];
        Arrays.fill(left, Integer.MAX_VALUE);
        int[] right = new int[n];
        Arrays.fill(right, Integer.MIN_VALUE);
        
        int smallest_on_left = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++) {
            left[i] = smallest_on_left;
            smallest_on_left = Math.min(smallest_on_left, nums[i]);
        }
        
        int largest_on_right = Integer.MIN_VALUE;
        for(int i = n-1; i >=0; i--) {
            right[i] = largest_on_right;
            largest_on_right = Math.max(largest_on_right, nums[i]);
        }
        
        for(int i = 0; i < n; i++) {
            if(left[i] < nums[i] && nums[i] < right[i]) {
                return true;
            }
        }
        return false;
    }
}