/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    const n = nums.length;
    let start = 0;
    let end = n -1;
    let smallest_el_index = 0;
    let bs = (start, end) => {
        while(start <= end) {
            let mid = start + ( end - start) / 2;
            mid = parseInt(mid);
            if(nums[mid] == target) {
                return mid;
            } else if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    if(nums[0] < nums[n-1]) {
        //console.log("hey")
        return bs(0, n-1);
    }
    while(start < end) {
        let mid = start + ( end - start) / 2;
        mid = parseInt(mid);
        if(nums[end] < nums[mid]) {
            if(nums[end] < nums[smallest_el_index]) {
                smallest_el_index = end;
            }
            start = mid + 1;
        } else {
            if(nums[mid] < nums[smallest_el_index]) {
                smallest_el_index = mid;
            }
            end = mid;
        }
    }
    //console.log(smallest_el_index)
    
    
    
    if(nums[smallest_el_index] == target) {
        return smallest_el_index;
    }
    let res1 = bs(0, smallest_el_index - 1);
    if(res1 == -1) {
        return bs(smallest_el_index, n - 1);
    } else {
        return res1;
    }
};