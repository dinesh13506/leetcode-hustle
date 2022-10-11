/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const n = nums.length;
    const tail = [];
    
    let ceilIdx = (target) => {
        let start = 0, end = tail.length-1;
        let idx = end;
        while(start <= end) {
            let mid = start;
            mid += parseInt((end - start) / 2);
            if(tail[mid] == target) {
                idx = mid;
                return idx
            }
            else if(target < tail[mid]) {
                idx = mid;
                end = mid - 1;
            }
            else if(target > tail[mid]) {
                start = mid + 1
            }
        }
        return idx;
    }
    
    tail.push(nums[0]);
    for(let i = 1; i < n; i++) {
        if(nums[i] > tail[tail.length - 1]) {
            tail.push(nums[i]);
        } else {
            let idx = ceilIdx(nums[i]);
            tail[idx] = nums[i];
        }
    }
    return tail.length >= 3
};