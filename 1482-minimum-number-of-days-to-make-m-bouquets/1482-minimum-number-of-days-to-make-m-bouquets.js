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
        let stack = [];
        let totalMakes = 0;
        for(let i = 0; i < n; i++) {
            if(bloomDay[i] <= days) {
                if(stack.length == 0) {
                    stack.push(1);
                } else {
                    let top = stack[stack.length - 1];
                    if(top < k) {
                        stack[stack.length - 1] = stack[stack.length - 1] + 1;
                    } else {
                        stack.push(1);
                    }
                }
            } else {
                if(stack.length && stack[stack.length - 1] < k) {
                    stack.pop();
                }
            }
        }
        let c = 0;
        for(let value of stack) {
            if(value >= k) c++
        }
        return c >= m;
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