class Solution {
    public HashMap<Integer, Double> map; // = new HashMap<int, double>();
    public double pow(double x, int n) {
        if(n == 0) {
            return 1;
        }
        if(map.containsKey(n)) {
            return map.get(n);
        }
        if(n%2 == 0) {
            map.put(n , this.pow(x, n / 2) * this.pow(x, n / 2));
        } else {
            map.put(n , x * this.pow(x, n / 2) * this.pow(x, n / 2));
        }
        return map.get(n);
    }
    public double myPow(double x, int n) {
       this.map = new HashMap<Integer, Double>();
       return n >= 0 ? pow(x,n) : (double) 1 / pow(x,n);
    }
}