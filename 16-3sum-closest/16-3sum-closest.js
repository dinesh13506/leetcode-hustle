/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let n = nums.length
    nums.sort((a,b) => { return a - b })
    
    
    let lowerbound = (lo,hi, target) => {
        let lb = nums[lo], ub = nums[hi]
        while(lo <= hi) {
            let mid = lo + parseInt((hi - lo) / 2)
            if(nums[mid] == target) {
                return [target, target]
            }
            else if(target < nums[mid]) {
                ub = nums[mid]
                hi = mid - 1
            } else if(target > nums[mid]) {
                lb = nums[mid]
                lo = mid + 1
            }
        }
        return [lb,ub]
    }
    
    let upperbound = (lo,hi, target) => {
        let ans = nums[hi]
        while(lo <= hi) {
            let mid = lo + parseInt((hi - lo) / 2)
            if(nums[mid] == target) {
                ans = target
                return ans
            }
            else if(target < nums[mid]) {
                ans = nums[mid]
                hi = mid - 1
            } else if(target > nums[mid]) {
                lo = mid + 1
            }
        }
        return ans
    }
    
    let diff = Infinity
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n - 1; j++) {
            let third = target - nums[i] - nums[j]
            //find third in j + 1 to n - 1
            let [lb,ub] = lowerbound(j + 1, n - 1, third)
            //let ub = upperbound(j + 1, n - 1, third)
            //console.log(lb, ub)
            if(Math.abs(third - lb) < Math.abs(diff)) {
                diff =  third - lb
            }
            if(Math.abs(third - ub) < Math.abs(diff)) {
                diff =  third - ub
            }
            if(diff == 0) return target
        }
    }
    //console.log(diff)
    return target - diff
};