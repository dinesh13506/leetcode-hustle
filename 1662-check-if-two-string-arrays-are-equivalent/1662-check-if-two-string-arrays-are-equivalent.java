class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        StringBuffer sb1 = new StringBuffer("");
        StringBuffer sb2 = new StringBuffer("");
        for(String w : word1) {
            sb1.append(w);
        }
        for(String w : word2) {
            sb2.append(w);
        }
        return sb1.compareTo(sb2) == 0 ? true : false;
    }
}