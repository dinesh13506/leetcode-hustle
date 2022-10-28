class Solution {
    public boolean isSubsequence(String s, String t) {
        final int m = s.length();
        final int n = t.length();
        int p1 = 0;
        int p2 = 0;
        while(p1 < m) {
            char ch = s.charAt(p1);
            boolean found = false;
            while(p2 < n) {
                if(t.charAt(p2) == ch) {
                    p2++;
                    found = true;
                    break;
                }
                p2++;
            }
            if(found == false) {
                return false;
            }
            p1++;
        }
        return true;
    }
}