class Solution {
    public String removeKdigits(String num, int k) {
        final int n = num.length();
        LinkedList<Character> queue = new LinkedList<Character>();
        for(int i = 0; i < n; i++) {
            while(queue.isEmpty() == false && num.charAt(i) < queue.peekLast() && k > 0) {
                k--;
                queue.pollLast();
            }
            queue.addLast(num.charAt(i));
        }
        while(queue.isEmpty() == false && k > 0) {
                k--;
                queue.pollLast();
        }
        //System.out.println(queue);
        while(queue.isEmpty() == false && queue.peekFirst() == '0') {
                queue.pollFirst();
        }
        
        StringBuilder sb = new StringBuilder("");
        while(queue.isEmpty() == false) {
                sb.append( queue.pollFirst());
        }
        
        return sb.length() == 0 ? "0" : sb.toString();
        
    }
}