class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        final int n = nums.length;
        HashMap<Integer, Integer> map = new HashMap<Integer,Integer>();
        
        //base case
        if(n <= 1) {
            return false;
        }
        int[] prefixSum = new int[n];
        for(int i = 0; i < n; i++) {
            prefixSum[i] = (i > 0 ? prefixSum[i-1] : 0) + nums[i];
            if(map.containsKey(prefixSum[i])) {
                int j = map.get(prefixSum[i]);
                if(i - j > 1) {
                    return true; //we found a subarray of sum 0 and length > 1
                }
            } else {
                map.put(prefixSum[i], i);
            }
        }
        for(int i = 0; i < n; i++) {
            if(i > 0 && prefixSum[i] % k == 0) {
                return true;
            } else {
                int value = prefixSum[i] - k;
                while(value > 0) {
                    if(map.containsKey(value)) {
                        int j = map.get(value);
                        if(i - j > 1) {
                            return true;
                        }
                    }
                    value -= k;
                }
            }
        }
        return false;
        
    }
}