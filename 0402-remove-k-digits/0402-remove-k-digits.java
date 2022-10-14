class Solution {
    public String removeKdigits(String num, int k) {
        final int n = num.length();
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0; i < n; i++) {
            if(stack.size() == 0) {
                stack.push(num.charAt(i));
            } else {
                while(stack.size() > 0 && num.charAt(i) < stack.peek() && k > 0) {
                    stack.pop();
                    k--;
                }
                stack.push(num.charAt(i));
            }
        }
        while(stack.size() > 0 && k > 0) {
            stack.pop();
            k--;
        }
        
        Stack<Character> resultStack = new Stack<Character>();
        while(stack.size() > 0) {
            resultStack.push(stack.pop());
        }
        while(resultStack.size() > 0 && resultStack.peek() == '0') {
            resultStack.pop();
        }
        while(resultStack.size() > 0) {
            
            stack.push(resultStack.pop());
        }
        StringBuilder sb = new StringBuilder();
        while(stack.size() > 0) {
            sb.insert(0,stack.pop());
        }
        return sb.length() <= 0 ? "0" : sb.toString();
    }
}