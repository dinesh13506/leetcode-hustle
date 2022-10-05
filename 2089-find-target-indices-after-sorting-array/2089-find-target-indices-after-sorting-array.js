/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    
    nums.sort((a,b) =>  { return a - b } )
    let n = nums.length
    let bs = () => {
        let start = 0, end = n-1
        let index = Infinity
        while(start <= end) {
            let mid = start + parseInt((end - start) / 2)
            if(nums[mid] == target) {
                index = Math.min(mid, index)
                end = mid - 1
            } else if(target < nums[mid]) {
                end = mid - 1
            } else if(target > nums[mid]) {
                start = mid + 1
            }
        }
        return index
    }
    
    let low = bs()
    //console.log(low)
    let ans = []
    while(low < n && nums[low] == target) {
        ans.push(low)
        low++
    }
    return ans
};