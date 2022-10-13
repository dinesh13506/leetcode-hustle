class Solution {
    
    List<List<Integer>> ans = new ArrayList<List<Integer>>();
    List<Integer> result = new ArrayList<Integer>();
    public void backtrack(int[] nums) {
        if(result.size() >= nums.length) {
            ans.add(new ArrayList<>(result));
            return;
        }
        for(int i = 0; i < nums.length; i++) {
            if(result.contains(nums[i])) {
                continue;
            }
            result.add(nums[i]);
            backtrack(nums);
            result.remove(result.size() - 1);
        }
    }
    
    public List<List<Integer>> permute(int[] nums) {
        
        backtrack(nums);
        return ans;
    }
}