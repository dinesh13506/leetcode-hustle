class Solution {
    
    List<List<Integer>> ans = new ArrayList<List<Integer>>();
    List<Integer> result = new ArrayList<Integer>();
    public void backtrack(int[] nums, boolean[] seen) {
        if(result.size() >= nums.length) {
            ans.add(new ArrayList<>(result));
            return;
        }
        for(int i = 0; i < nums.length; i++) {
            if(seen[i]) {
                continue;
            }
            seen[i] = true;
            result.add(nums[i]);
            backtrack(nums, seen);
            result.remove(result.size() - 1);
            seen[i] = false;
        }
    }
    
    public List<List<Integer>> permute(int[] nums) {
        boolean[] seen = new boolean[nums.length];
        Arrays.fill(seen, false);
        backtrack(nums, seen);
        return ans;
    }
}