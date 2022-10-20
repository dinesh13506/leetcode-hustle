import java.util.*;
import java.math.*;

class Solution {
    
    public boolean canEat(int[] piles, int h, int speed) {
        BigInteger time = BigInteger.valueOf(0);
        for(int pile : piles) {
            if(pile <= speed) {
                time = time.add(BigInteger.valueOf(1));
            } else {
                time = time.add(BigInteger.valueOf(pile / speed));
                if(pile % speed != 0) {
                    time = time.add(BigInteger.valueOf(1));
                }
            }
        }
        //System.out.println(time);
        //System.out.println(time.compareTo(BigInteger.valueOf(h)));
        return time.compareTo(BigInteger.valueOf(h)) <= 0;
    }
    
    public int minEatingSpeed(int[] piles, int h) {
        
        int low = 1;
        int high = 1;
        
        for(int pile: piles) {
            high = high < pile ? pile : high;
        }
        
        int ans = high;
        while(low <= high) {
            int speed = low + (high - low) / 2;
            if(canEat(piles, h, speed)) {
                ans = ans > speed ? speed: ans;
                high = speed - 1;
            } else {
                low = speed + 1;
            }
        }
        return ans;
    }
}