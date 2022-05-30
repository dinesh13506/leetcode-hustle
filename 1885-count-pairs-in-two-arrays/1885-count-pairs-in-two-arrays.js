/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) {
    
    let n = nums1.length
    for(let i = 0; i < n; i++) {
        nums1[i] = nums1[i] -  nums2[i]
    }
    
    nums1.sort(function(a,b) {
        return a - b
    })
    
    let count = function(start, end, target) {
        let count = 0
        let index = n
        while(start <= end) {
            
            let mid = start + parseInt((end - start) / 2)
            if(nums1[mid] == target) {
                index = mid
                end = mid - 1
            } else if(target < nums1[mid]) {
                index = mid
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        
        //console.log("count ", n - index)
        return n - index
    }
    
    let ans = 0
    for(let i = 0; i < n; i++) {
        let x = nums1[i]
        let y = 0 - x + 1 // x + y > 0
        //calculate how many values are greater than equal y if we start from i + 1
        ans = ans + count(i + 1, n, y) 
    }
    return ans
};