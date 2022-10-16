class Solution {
    public int characterReplacement(String s, int k) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer> ();
        int maxFreq = 0, maxLength = 0;
        final int n = s.length();
        int p1 = 0;
        for(int p2 = 0; p2 < n; p2++) {
            Character ch = s.charAt(p2);
            if(map.containsKey(ch)) {
                map.put(ch, map.get(ch) + 1);
            } else {
                map.put(ch, 1);
            }
            maxFreq = Math.max(maxFreq, map.get(ch));
            while(p2 - p1 + 1 - maxFreq > k) {
                map.put(s.charAt(p1), map.get(s.charAt(p1)) - 1);
                p1++;
            }
            maxLength = Math.max(maxLength, p2 - p1 + 1);
        }
        return maxLength;
    }
}