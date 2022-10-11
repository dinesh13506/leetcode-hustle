class Solution {
    public String removeVowels(String s) {
        HashSet<Character> set = new HashSet<Character>();
        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');
        int n = s.length();
        StringBuffer bf = new StringBuffer();
        for(int i = 0; i < n; i++) {
            if(set.contains(s.charAt(i))) {
                continue;
            }
            bf.append(s.charAt(i));
        }
        return bf.toString();
    }
}