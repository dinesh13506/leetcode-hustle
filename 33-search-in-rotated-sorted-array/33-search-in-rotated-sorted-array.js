/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    const n = nums.length;
    
    let findPivot = () => {
        let start = 0, end = n - 1;
        while(start <= end) {
            let mid = start;
            mid += parseInt((end - start) / 2)
            if(nums[mid] > nums[mid+1]) {
                return mid + 1
            }
            else if(nums[start] <= nums[mid]) {
                start = mid + 1
            }
            else if(nums[end] >= nums[mid]) {
                end = mid - 1
            }
        }
        return 0
    }
    
    
    let bs = (start, end) => {
        while(start <= end) {
            let mid = start;
            mid += parseInt((end - start) / 2)
            if(nums[mid] == target) {
                return mid
            } else if(target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return -1
    }
    
    let idx = findPivot()
    //console.log(idx)
    if(idx == 0) {
        return bs(0, n-1)
    } else {
        let res = bs(0, idx-1)
        if(res >= 0) {
            return res
        }
        let res2 = bs(idx, n-1)
        if(res2 >= 0) {
            return res2
        }
        return -1
    }
    
};