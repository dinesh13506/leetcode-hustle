class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] ans = new int[2];
        for(int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int x = target - num;
            if(map.containsKey(x)) {
                ans[0] = map.get(x);
                ans[1] = i;
                break;
            }
            map.put(nums[i], i);
        }
        return ans;
    }
}