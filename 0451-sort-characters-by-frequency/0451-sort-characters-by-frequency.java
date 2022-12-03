class Solution {
    public String frequencySort(String s) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        char[] chArr = s.toCharArray();
        List<Character> list = new ArrayList<>();
        for(char ch : chArr) {
            map.put(ch, map.getOrDefault(ch , 0) + 1);
        }
        for(char key : map.keySet()) {
            list.add(key);
        }
        Collections.sort(list, (a,b) -> { return (map.get(b) - map.get(a));});
        StringBuilder sb = new StringBuilder("");
        for(char ch : list) {
            int count  = map.get(ch);
            while(count > 0) {
                sb.append(ch);
                count--;
            }
        }
        return sb.toString();
    }
}