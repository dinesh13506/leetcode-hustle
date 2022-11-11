class Solution {
    public int removeDuplicates(int[] nums) {
        int p1 = 0;
        for(int i = 0; i < nums.length; i++) {
            if(i == 0) {
                nums[p1] = nums[i];
                p1++;
            } else {
                if(nums[i] != nums[p1-1]) {
                    nums[p1] = nums[i];
                    p1++;
                } else if(nums[i] == nums[p1-1]) {
                    if(p1-2 >= 0 && nums[p1 -2] == nums[p1-1]) {
                        continue;
                    } else {
                        nums[p1] = nums[i];
                        p1++;
                    }
                }
            }
        }
        
        return p1;
    }
}