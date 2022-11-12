class MedianFinder {
    private PriorityQueue<Integer> minpq;
    private PriorityQueue<Integer> maxpq;

    public MedianFinder() {
        maxpq = new PriorityQueue<>((a,b) -> { return b - a;});
        minpq = new PriorityQueue<>((a,b) -> { return a - b;});
        
    }
    
    public void addNum(int num) {
        maxpq.add(num);
        minpq.add(maxpq.poll());
        if(minpq.size() > maxpq.size()) {
            maxpq.add(minpq.poll());
        }
    }
    
    public double findMedian() {
        if(minpq.isEmpty()) {
            return (double) maxpq.peek();
        }
        else {
            if(minpq.size() == maxpq.size()) {
                double a = (double) minpq.peek();
                int b = maxpq.peek();
                return (a + b)/2;
            }
            else if(minpq.size() < maxpq.size()) {
                return (double) maxpq.peek();
            }
        }
        return 0;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */