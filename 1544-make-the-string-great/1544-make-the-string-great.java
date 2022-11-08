class Solution {
    public String makeGood(String s) {
        char[] arr = s.toCharArray();
        Stack<Character> stack = new Stack<>();
        for(char ch : arr) {
            if(stack.isEmpty()) {
                stack.push(ch);
                continue;
            } else {
                char top = stack.peek();
                if( (top - 'a' == ch - 'A') || (top - 'A' == ch - 'a')) {
                    stack.pop();
                } else {
                    stack.push(ch);
                }
            }
        }
        StringBuilder sb = new StringBuilder("");
        while(!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        return sb.reverse().toString();
    }
}