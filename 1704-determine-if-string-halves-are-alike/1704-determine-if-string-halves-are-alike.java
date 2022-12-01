class Solution {
    public boolean halvesAreAlike(String s) {
        final int n = s.length();
        Set<Character> set = new HashSet<>();
        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');
        s = s.toLowerCase();
        int count1 = 0, count2 = 0;
        for(int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if(set.contains(ch)) {
                if(i < n / 2) {
                   count1++;
                } else {
                    count2++;
                }
            }
        }
        return count1 == count2;
    }
}