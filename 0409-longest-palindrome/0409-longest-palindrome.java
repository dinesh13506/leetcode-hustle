class Solution {
    public int longestPalindrome(String s) {
        HashMap<Character, Integer> count = new HashMap<Character, Integer>();
        char[] carr = s.toCharArray();
        for(char ch : carr) {
           count.put(ch, count.getOrDefault(ch, 0) + 1);
        }
        int ans = 0;
        boolean is_odd = false;
        for(char ch : count.keySet()) {
            if(count.get(ch) % 2 == 0) {
                ans += count.get(ch);
            } else {
                is_odd = true;
                ans += (count.get(ch) - 1);
            }
        }
        if(is_odd == true) {
            ans++;
        }
        return ans;
    }
}