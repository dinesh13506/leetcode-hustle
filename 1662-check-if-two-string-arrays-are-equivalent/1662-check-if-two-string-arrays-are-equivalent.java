class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        int p1 = 0, p2 = 0;
        int w1 = 0, w2 = 0;
        while(w1 < word1.length && w2 < word2.length) {
            
            
            if(word1[w1].charAt(p1) == word2[w2].charAt(p2)) {
                p1++;
                p2++;
            } else {
                return false;
            }
            if(p1 == word1[w1].length()) {
                w1++;
                p1 = 0;
            }
            if(p2 == word2[w2].length()) {
                w2++;
                p2 = 0;
            }
        }
        if(w1 == word1.length && w2 == word2.length) {
            return true;
        }
        return false;
    }
}