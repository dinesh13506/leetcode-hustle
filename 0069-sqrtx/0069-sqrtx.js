/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let start = 0, end = x;
    let ans = 0;
    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        if(mid *mid == x) {
            return mid
        } else if(x < mid * mid) {
            end = mid - 1;
        } else {
            ans = mid;
            start = mid + 1;
        }
    }
    return ans
    
};