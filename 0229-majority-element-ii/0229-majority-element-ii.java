class Solution {
    public List<Integer> majorityElement(int[] nums) {
        
        final int n = nums.length;
        Integer ans1 = null;
        Integer ans2 = null;
        int count1 = 0, count2 = 0;
        for(int num : nums) {
            if(ans1 != null && ans1 == num) {
                count1++;
            } else if(ans2 != null && ans2 == num) {
                count2++;
            } else if(count1 == 0) {
                count1++;
                ans1 = num;
            } else if(count2 == 0) {
                count2++;
                ans2 = num;
            } else {
                count1--;
                count2--;
            }
        }
        
        int c1 = 0;
        int c2 = 0;
        
        for(int num : nums) {
            if(ans1 != null && ans1 == num) {
                c1++;
            }
            if(ans2 != null && ans2 == num) {
                c2++;
            }
        }
        
        List<Integer> ans = new ArrayList<Integer>();
        if(c1 > n / 3) ans.add(ans1);
        if(c2 > n / 3) ans.add(ans2);
        return ans;
    }
}