class Solution {
    public boolean halvesAreAlike(String s) {
        s = s.toLowerCase();
        int count1 = 0, count2 = 0;
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U') {
                if(i < s.length() / 2) {
                   count1++;
                } else {
                    count2++;
                }
            }
        }
        return count1 == count2;
        
        
    }
}