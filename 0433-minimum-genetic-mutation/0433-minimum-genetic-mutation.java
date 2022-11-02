class Solution {
    public int minMutation(String start, String end, String[] bank) {
        int steps = 0;
        Queue<String> queue = new LinkedList<String>();
        Set<String> set = new HashSet<String>();
        
        queue.add(start);
        set.add(start);
        
        while(queue.size() > 0) {
            int size = queue.size();
            
            for(int j = 0; j < size; j++) {
                String curr = queue.remove();
                if(curr.equals(end)) {
                    return steps;
                }
                for(char ch : new char[]{'A','C','G','T'}) {
                    for(int i = 0; i < curr.length(); i++) {
                        String newStr = curr.substring(0, i) + ch + curr.substring(i+1);
                        if(!set.contains(newStr) && Arrays.asList(bank).contains(newStr)) {
                            queue.add(newStr);
                            set.add(newStr);
                        }
                    }
                }
            }
            steps++;
        }
        return -1;
    }
}