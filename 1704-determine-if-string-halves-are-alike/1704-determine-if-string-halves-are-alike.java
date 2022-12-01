class Solution {
    public boolean halvesAreAlike(String s) {
        s = s.toLowerCase();
        HashMap<Character, Integer> map1 = new HashMap<Character, Integer>();
        HashMap<Character, Integer> map2 = new HashMap<Character, Integer>();
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U') {
                if(i < s.length() / 2) {
                    map1.put(ch, map1.getOrDefault(ch, 0) + 1);
                } else {
                    map2.put(ch, map2.getOrDefault(ch, 0) + 1);
                }
            }
        }
        
        int count1 = 0;
        
        
        for(char ch : map1.keySet()) {
            count1 = count1 + map1.get(ch);
        }
        
         int count2 = 0;
        
        
        for(char ch : map2.keySet()) {
            count2 = count2 + map2.get(ch);
        }
        return count1 == count2;
        
        
    }
}