class TwoSum {

    private ArrayList<Integer> alist;
    public TwoSum() {
       alist = new ArrayList<Integer>(); 
    }
    
    public void add(int number) {
        alist.add(number);
    }
    
    public boolean find(int value) {
        Collections.sort(alist, (o1, o2) -> {
            return o1 - o2;
        });
        
        final Integer n = alist.size();
        Integer p1 = 0, p2 = n-1;
        while(p1 < p2) {
            Integer sum = alist.get(p1) + alist.get(p2);
            if(sum == value) {
                return true;
            } else if(sum < value) {
                p1++;
            } else {
                p2--;
            }
        }
        return false;
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * TwoSum obj = new TwoSum();
 * obj.add(number);
 * boolean param_2 = obj.find(value);
 */