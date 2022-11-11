class Solution {
    public int removeDuplicates(int[] nums) {
        int p1 = 0;
        for(int i = 0; i < nums.length; i++) {
            if(i == 0) {
                nums[p1] = nums[i];
                p1++;
                continue;
            } else if(nums[i] != nums[i-1]) {
                nums[p1] = nums[i];
                p1++;
            }
        }
        return p1;
    }
}