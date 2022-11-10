class Solution {
    public String removeDuplicates(String s) {
        Stack<Character> stack = new Stack<>();
        char[] arr = s.toCharArray();
        for(char ch : arr) {
            if(stack.isEmpty() || stack.peek() != ch) {
                stack.push(ch);
            } else if(stack.peek() == ch) {
                stack.pop();
            }
        }
        StringBuilder output = new StringBuilder();
        while(!stack.isEmpty()) {
            output.append(stack.pop());
        }
        return output.reverse().toString();
    }
}