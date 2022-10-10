class Solution {
    public int[][] merge(int[][] intervals) {
        int n = intervals.length;
        Arrays.sort(intervals, (a,b) -> {
            if(a[0] == b[0]) return a[1] - b[1];
            return a[0]- b[0];
        });
        
        ArrayList<int[]> al = new ArrayList<int[]>();
        al.add(intervals[0]);
        for(int i = 1; i < n; i++) {
            int[] last = al.get(al.size() - 1);
            int[] curr = intervals[i];
            if(curr[0] > last[1]) {
                al.add(curr);
            } else {
                al.remove(al.size() - 1);
                int min = Math.min(last[0], curr[0]);
                int max = Math.max(last[1], curr[1]);
                al.add(new int[]{min, max});
            }
        }
        //System.out.println(al.size());
        int[][] ans = new int[al.size()][2];
        int i = 0;
        while(i < al.size()) {
            ans[i] = al.get(i);
            i++;
        }
        
        return ans;
        
    }
}