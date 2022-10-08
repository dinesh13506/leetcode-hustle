class MinStack {

    private Stack<int[]> stack;
    public MinStack() {
        stack = new Stack<int[]>();
    }
    
    public void push(int val) {
        if(stack.size() == 0) {
            stack.push(new int[] {val, val});
        } else {
            int[] top = stack.peek();
            int min = Math.min(top[1], val);
            stack.push(new int[] {val, min});
        }
    }
    
    public void pop() {
         stack.pop();
    }
    
    public int top() {
        return stack.peek()[0];
    }
    
    public int getMin() {
        return stack.peek()[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */