class Solution {
    public boolean isVowel(char ch) {
        ch = Character.toLowerCase(ch);
        if(ch >= 'a' && ch <= 'z') {
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
    public String reverseVowels(String s) {
        final int n = s.length();
        char[] sarr = s.toCharArray();
        int p1 = 0,  p2 = n-1;
        while(p1 < p2) {
            if(!isVowel(sarr[p1])) {
                p1++;
            }
            if(!isVowel(sarr[p2])) {
                p2--;
            }
            if(isVowel(sarr[p1]) && isVowel(sarr[p2])) {
                char temp = sarr[p1];
                sarr[p1] = sarr[p2];
                sarr[p2] = temp;
                p1++;
                p2--;
            } else if(isVowel(sarr[p1])) {
                p2--;
            } else if(isVowel(sarr[p2])) {
               p1++;
            } else {
                p1++;
                p2--;
            } 
        }
        
        StringBuilder sb = new StringBuilder("");
        for(char ch : sarr) {
            sb.append(ch);
        }
        return sb.toString();
    }
}