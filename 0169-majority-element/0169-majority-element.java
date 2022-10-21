class Solution {
    public int majorityElement(int[] nums) {
        final int n = nums.length;
        int ans = -1;
        int count = 0;
        for(int num : nums) {
            if(count == 0) {
                count++;
                ans = num;
            } else {
                if(num == ans) {
                    count++;
                } else {
                    count--;
                }
            }
        }
        return ans;
    }
}