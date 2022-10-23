class Solution {
    public int[] findErrorNums(int[] nums) {
        final int n = nums.length;
        final Set<Integer> set = new HashSet<Integer>();
        double expectedSum = n * (n + 1) * ((double) 1/2);
        int currSum = 0;
        for(int num : nums) {
            currSum += num;
        }
        int diff = (int) expectedSum - currSum;
        for(int num : nums) {
            if(set.contains(num)) {
                return new int[]{num,  num + diff};
            }
            set.add(num);
        }
        return new int[2];
    }
}