class Solution {
    public int reverse(int x) {
        long rev = 0;
        long sign = 1;
        if(x < 0) {
            sign = -1;
        }
        x = Math.abs(x);
        long min = -1 * (long) Math.pow(2, 31);
        long max = (long) Math.pow(2, 31) - 1;
        while(x > 0) {
            long d = (x % 10);
            rev = (10 * rev) + d;
            x = x / 10;
        }
        
        long ans =  rev * sign;
        if(ans < min || ans > max) {
            return 0;
        }
        return (int) ans;
    }
}