import java.util.Collections.*;
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i = 0, j = 0;
        ArrayList<Integer> al = new ArrayList<Integer>();
        while(i < nums1.length && j < nums2.length) {
            if(nums1[i] == nums2[j]) {
                al.add(nums1[i]);
                i++;
                j++;
            } else if(nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }
        
        int[] ans = new int[al.size()];
        for(i = 0; i < al.size(); i++) {
            ans[i] = al.get(i);
        }
        return ans;
        
    }
}