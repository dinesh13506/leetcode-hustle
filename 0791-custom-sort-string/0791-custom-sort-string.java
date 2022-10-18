class Solution {
    public String customSortString(String order, String s) {
        int[] indexMap = new int[26];
        Arrays.fill(indexMap, Integer.MAX_VALUE);
        for(int i = 0; i < order.length(); i++) {
            char ch = order.charAt(i);
            indexMap[ch - 'a'] = i;
        }
        
        ArrayList<Character> list = new ArrayList<Character>();
        for(int i = 0; i < s.length(); i++) {
            list.add(s.charAt(i));
        }
        Collections.sort(list, (a,b) -> {
            return indexMap[a - 'a'] - indexMap[b- 'a'];
        });
        
        StringBuffer bf = new StringBuffer();
        for(int i = 0; i < list.size(); i++) {
            bf.append(list.get(i));
        }
        return bf.toString();
        
    }
}