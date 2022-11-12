class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        final int n = nums1.length;
        final int[] ans = new int[n];
        for(int i = 0; i < n; i++) {
            var found = false;
            for(int j = 0; j < nums2.length; j++) {
                if(nums1[i] == nums2[j]) {
                    while(j < nums2.length) {
                        if(nums2[j] > nums1[i]) {
                            found = true;
                            ans[i] = nums2[j];
                            break;
                        }
                        j++;
                    }
                }
            }
            if(found == false) {
                ans[i] = -1;
            }
        }
        return ans;
    }
}