class Solution {
    public boolean isIsomorphic(String s, String t) {
        final int m = s.length();
        final int n = t.length();
        HashMap<Character, Character> map1 = new HashMap<Character, Character>();
        HashMap<Character, Character> map2 = new HashMap<Character, Character>();
        if(m != n) {
            return false;
        }
        for(int i = 0; i < n; i++) {
            char sch = s.charAt(i), mch = t.charAt(i);
            if(map1.containsKey(sch)) {
                if(map1.get(sch) != mch) {
                    return false;
                }
            } else {
                map1.put(sch, mch);
            }
            if(map2.containsKey(mch)) {
                if(map2.get(mch) != sch) {
                    return false;
                }
            } else {
                map2.put(mch, sch);
            }
        }
        return true;
        
    }
}