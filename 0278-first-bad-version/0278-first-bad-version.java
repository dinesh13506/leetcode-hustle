/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int start = 1, end = n;
        int ans = n;
        while(start <= end) {
            int version = start + (end - start) / 2;
            if(isBadVersion(version)) {
                ans = Math.min(ans, version);
                end = version - 1;
            }
            else {
                start = version + 1;
            }
        }
        return ans;
        
    }
}