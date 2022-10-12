class Solution {
    public int candy(int[] ratings) {
        
        final int n = ratings.length;
        int[] candyCount = new int[n];
        Arrays.fill(candyCount,1);
        
        //left to right
        for(int i = 1; i < n; i++) {
            int leftRating = ratings[i-1];
            if(ratings[i] > leftRating) {
                candyCount[i] = Math.max(candyCount[i], 1 + candyCount[i-1]);
            }
        }
        
        //right to left
        for(int i = n-2; i>=0 ; i--) {
            int rightRating = ratings[i+1];
            if(ratings[i] > rightRating) {
                candyCount[i] = Math.max(candyCount[i], 1 + candyCount[i+1]);
            }
        }
        
        int sum = 0;
        for(int count : candyCount) sum += count;
        
        return sum;
        
    }
}