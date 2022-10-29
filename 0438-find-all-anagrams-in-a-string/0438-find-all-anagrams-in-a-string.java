class Solution {
    
    public boolean isAnagram(int[] countp, int[] counts) {
        // Arrays.stream(countp).forEach(a -> System.out.print(a + " "));
        // System.out.println();
        // Arrays.stream(counts).forEach(a -> System.out.print(a + " "));
        // System.out.println();
        for(int i = 0; i < 26; i++) {
            if(countp[i] != counts[i]) {
                return false;
            }
        }
        return true;
    }
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> ans = new ArrayList<Integer>();
        int[] countp = new int[26];
        int[] counts = new int[26];
        char[] parr = p.toCharArray();
        char[] sarr = s.toCharArray();
        for(char ch : parr) {
            int idx = ch - 'a';
            countp[idx]++;
        }
        for(int i = 0; i < Math.min(parr.length, sarr.length); i++) {
            char ch = sarr[i];
            int idx = ch - 'a';
            counts[idx]++;
        }
        if(isAnagram(countp, counts)) {
            ans.add(0);
        }
        for(int i = parr.length; i < sarr.length; i++) {
            int left = sarr[i -  parr.length] - 'a';
            //System.out.println(sarr[i -  parr.length ] + " " + sarr[i]);
            counts[left]--;
            char ch = sarr[i];
            int idx = ch - 'a';
            counts[idx]++;
            if(isAnagram(countp, counts)) {
                ans.add(i - parr.length+1);
            }
        }
        return ans;
        
    }
}