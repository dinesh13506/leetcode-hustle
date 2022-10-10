class Solution {
    public String breakPalindrome(String palindrome) {
        StringBuilder sb = new StringBuilder();
        sb.append(palindrome);
        int n = sb.length();
        if(n == 1) {
            return "";
        }
        for(int i = 0; i < (n / 2); i++) {
            if(sb.charAt(i) != 'a') {
                sb.setCharAt(i, 'a');
                return sb.toString();
            }
        }
        sb.setCharAt(n-1, 'b');
        return sb.toString();
    }
}