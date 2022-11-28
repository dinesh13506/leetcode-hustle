class Solution {
    public List<List<Integer>> findWinners(int[][] matches) {
        HashMap<Integer, Integer> wmap = new HashMap<Integer, Integer>();
        HashMap<Integer, Integer> lmap = new HashMap<Integer, Integer>();
        
        for(int[] match : matches) {
            wmap.put(match[0], wmap.getOrDefault(match[0], 0) + 1);
            lmap.put(match[1], lmap.getOrDefault(match[1], 0) + 1);
        }
        
        ArrayList<Integer> ans1 = new ArrayList<Integer>();
        for(int winner : wmap.keySet()) {
            if(lmap.containsKey(winner) == false) {
                ans1.add(winner);
            }
        }
        ArrayList<Integer> ans2 = new ArrayList<Integer>();
        for(int looser : lmap.keySet()) {
            if(lmap.get(looser) == 1) {
                ans2.add(looser);
            }
        }
        
        Collections.sort(ans1, (a,b) -> {
            return a - b;
        });
        
        Collections.sort(ans2, (a,b) -> {
            return a - b;
        });
        
        List<List<Integer>> ans = new ArrayList<>();
        ans.add(ans1);
        ans.add(ans2);
        return ans;
    }
}