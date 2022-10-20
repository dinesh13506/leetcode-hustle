/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    
    const n = bloomDay.length;
    let min = k, max = Math.max(...bloomDay);
    //console.log(min, max);
    
    let isPossible = (days) => {
        let count = 0;
        
        let canMake = (i) => {
            let c = 0;
            while(i < n) {
                if(bloomDay[i] > days || c >= k) {
                    break;
                }
                i++
                c++;
            }
            return c >= k ? true : false;
        }
        
        let totalMakes = 0;
        for(let i = 0; i < n;) {
            if(canMake(i)) {
                i = i + k;
                totalMakes++;
            } else {
                i = i + 1;
            }
        }
        return totalMakes >= m;
    }
    
    let ans = -1;
    let low = 1, high = max;
    while(low <= high) {
        let mid = low + parseInt((high - low)/2);
        if(isPossible(mid)) {
            ans = ans == -1 ? mid : Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
};