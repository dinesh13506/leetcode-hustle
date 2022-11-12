class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        final int n = nums1.length;
        final int[] ans = new int[n];
        var stack = new Stack<Integer>();
        var map = new HashMap<Integer, Integer>();
        for(var num : nums2) {
            while(stack.size() > 0 && stack.peek() < num) {
                map.put(stack.pop() , num);
            }
            stack.push(num);
        }
        var p = 0;
        for(var num : nums1) {
            ans[p] = map.get(num) == null ? -1 : map.get(num);
            p++;
        }
        
        return ans;
    }
}