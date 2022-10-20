class Solution {
   
    
    public boolean isPossible(int[] bloomDay, int k, int m, int days) {
        final int n = bloomDay.length;
        int c = 0;
        Stack<Integer> stack = new Stack<Integer>();
        for(int i = 0; i < n; i++) {
            if(bloomDay[i] <= days) {
                if(stack.isEmpty()) {
                    stack.push(1);
                } else {
                    int top = stack.peek();
                    if(top + 1 <= k) {
                        stack.pop();
                        stack.push(top+1);
                    } else {
                        stack.push(1);
                    }
                }
            } else {
                if(stack.isEmpty() == false && stack.peek() < k) {
                    stack.pop();
                }
            }
        }
        
        while(stack.isEmpty() == false) {
            int top = stack.peek();
            stack.pop();
            if(top >= k) c++;
        }
        return c >= m ? true : false; 
    }
    public int minDays(int[] bloomDay, int m, int k) {
        final int n = bloomDay.length;
        int min = k, max = 0;
        for(int bd : bloomDay) {
            max = Math.max(max, bd);
        }
        
        int low = min, high = max;
        int ans = -1;
        while(low <= high) {
            int mid = low + ((high - low) / 2);
            if(isPossible(bloomDay, k, m, mid)) {
                ans = (ans == -1) ? mid : Math.min(ans, mid);
                high = mid - 1;
            } else {
                low = mid  + 1;
            }
        }
        return ans; 
    }
}