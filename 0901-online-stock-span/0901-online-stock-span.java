class MyNode {
    public int maxPrice;
    public int groupSize;
    
    public MyNode(int maxPrice, int groupSize) {
        this.maxPrice = maxPrice;
        this.groupSize = groupSize;
    }
    
    public void increaseGroupSize(int val) {
        this.groupSize += val;
    }
    
    public int getMaxPrice() {
        return this.maxPrice;
    }
    public int getGroupSize() {
        return this.groupSize;
    }
}

class StockSpanner {
    
    Stack<MyNode> stack;

    public StockSpanner() {
        stack = new Stack<>();
    }
    
    public int next(int price) {
        MyNode node = new MyNode(price, 1);
        while(!stack.isEmpty() && stack.peek().getMaxPrice() <= price) {
            MyNode top = stack.pop();
            node.increaseGroupSize(top.getGroupSize());
        }
        stack.push(node);
        return node.getGroupSize();
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */