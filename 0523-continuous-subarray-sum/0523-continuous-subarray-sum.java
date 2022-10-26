class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        final int n = nums.length;
        HashMap<Integer, Integer> map = new HashMap<Integer,Integer>();
        
        //base case
        if(n <= 1) {
            return false;
        }
        int sum = 0;
        for(int i = 0; i < n; i++) {
            sum += nums[i];
            int rem = sum % k;
            if(rem % k == 0 && i > 0) {
                return true;
            }
            if(map.containsKey(rem)) {
                int j = map.get(rem);
                if(i - j > 0) {
                    return true;
                }
            } else {
                map.put(rem, i + 1);
            }
        }
        return false;
        
    }
}