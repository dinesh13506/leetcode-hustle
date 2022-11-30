class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Set<Integer> set = new HashSet<Integer>();
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int a : arr) {
            map.put(a, map.getOrDefault(a, 0) + 1);
        }
        for(int key : map.keySet()) {
            if(set.contains(map.get(key))) return false;
            set.add(map.get(key));
        }
        return true;
    }
}