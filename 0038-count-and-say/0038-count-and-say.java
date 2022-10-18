class Node {
    public int count;
    public char ch;
    public Node(int count, char ch) {
        this.count = count;
        this.ch = ch;
    }
}

class Solution {
    HashMap<Integer, String> map;
    public Solution() {
        map = new HashMap<Integer, String>();
        map.put(1, "1");
        dp(30);
    }
    public String say(String s) {
        Stack<Node> stack = new Stack<Node>();
        for(int i = 0; i < s.length(); i++) {
            if(stack.isEmpty()) {
                stack.push(new Node(1, s.charAt(i)));
                continue;
            } else {
                Node top = stack.peek();
                if(s.charAt(i) == top.ch) {
                    top.count++;
                } else {
                    stack.push(new Node(1, s.charAt(i)));
                }
            }
        }
        StringBuffer bf = new StringBuffer();
        for(Node el : stack) {
            bf.append(el.count + "" + el.ch);
        }
        return bf.toString();
    }
    public String dp(int n) {
        if(n == 1) {
            return map.get(n);
        }
        map.put(n , say(dp(n-1)));
        return map.get(n);
    }
    public String countAndSay(int n) {
        return map.get(n);
    }
}