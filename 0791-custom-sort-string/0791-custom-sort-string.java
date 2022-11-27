class Solution {
    public String customSortString(String order, String s) {
        int[] indexMap = new int[26];
        Arrays.fill(indexMap, Integer.MAX_VALUE);
        int p1 = 0;
        for(int i = 0; i < order.length(); i++) {
            char ch = order.charAt(i);
            int idx = ch - 'a';
            indexMap[idx] = p1;
            p1++;
        }
        ArrayList<Character> al = new ArrayList<Character>();
        for(int i = 0; i < s.length(); i++) {
            al.add(s.charAt(i));
        }
        Collections.sort(al, (a,b) -> {
            return indexMap[a - 'a'] - indexMap[b-'a'];
        });
        StringBuilder sb = new StringBuilder("");
        for(char ch : al) {
            sb.append(ch);
        }
        return sb.toString();
    }
}