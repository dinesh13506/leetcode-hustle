class Solution {
    public int countGoodTriplets(int[] arr, int a, int b, int c) {
        
        final int n = arr.length;
        int ans = 0;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                for(int k = j + 1; k < n; k++) {
                    int va = Math.abs(arr[i] - arr[j]);
                    int vb = Math.abs(arr[j] - arr[k]);
                    int vc = Math.abs(arr[i] - arr[k]);
                    if(va <= a && vb <= b && vc<= c) {
                        ans++;
                    }
                }
            }
        }
        return ans;
    }
}