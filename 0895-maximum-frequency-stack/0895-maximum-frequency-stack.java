class FreqStack {

    public HashMap<Integer, Integer> counts;
    public HashMap<Integer, ArrayList<Integer> > stack;
    public int max = 0;
    public FreqStack() {
        max = 0;
        counts = new HashMap<Integer, Integer>();
        stack = new HashMap<Integer, ArrayList<Integer>>();
    }
    
    public void push(int val) {
        int count = counts.getOrDefault(val, 0);
        count++;
        counts.put(val, count);
        if(count > max) {
            max = count;
        }
        if(stack.containsKey(count)) {
            ArrayList<Integer> list =  stack.get(count);
            list.add(val);
        } else {
            stack.put(count, new ArrayList<Integer>());
            ArrayList<Integer> list =  stack.get(count);
            list.add(val);
        }
        //System.out.println(stack + " " + max);
    }
    
    public int pop() {
        ArrayList<Integer> top = stack.get(max);
        int index = top.size() - 1;
        int val = top.remove(index);
        if(stack.get(max).size() == 0) {
            max--;
        }
        counts.put(val, counts.get(val) - 1);
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.push(val);
 * int param_2 = obj.pop();
 */