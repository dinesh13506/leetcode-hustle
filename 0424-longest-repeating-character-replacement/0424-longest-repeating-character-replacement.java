class Solution {
    public int characterReplacement(String s, int k) {
        int maxFreq = 0, maxLength = 0;
        final int n = s.length();
        int[] count = new int[26];
        Arrays.fill(count,0);
        int p1 = 0;
        for(int p2 = 0; p2 < n; p2++) {
            Character ch = s.charAt(p2);
            count[ch - 'A']++;
            maxFreq = Math.max(maxFreq, count[ch - 'A']);
            while(p2 - p1 + 1 - maxFreq > k) {
                count[s.charAt(p1) - 'A']--;
                p1++;
            }
            maxLength = Math.max(maxLength, p2 - p1 + 1);
        }
        return maxLength;
    }
}