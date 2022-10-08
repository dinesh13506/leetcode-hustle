class MaxStack {
    
    private TreeSet<int[]> stack;
    private TreeSet<int[]> values;
    private int id = 0;

    public MaxStack() {
        stack = new TreeSet<int[]>((o1, o2) -> {
            return o1[1] - o2[1];
        });
        
        values = new TreeSet<int[]>((o1,o2) -> {
            if(o1[0] == o2[0]) {
                return o1[1] - o2[1];
            }
            return o1[0] - o2[0];
        });
    }
    
    public void push(int x) {
        id++;
        stack.add(new int[]{x, id});
        values.add(new int[] {x, id});
    }
    
    public int pop() {
        int[] pair = stack.pollLast();
        values.remove(pair);
        return pair[0];
    }
    
    public int top() {
        //System.out.println(stack);
        int[] pair = stack.last();
        //System.out.println(pair);
        return pair[0];
    }
    
    public int peekMax() {
        int[] pair = values.last();
        return pair[0];
    }
    
    public int popMax() {
        int[] pair = values.pollLast();
        stack.remove(pair);
        return pair[0];
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * MaxStack obj = new MaxStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.peekMax();
 * int param_5 = obj.popMax();
 */