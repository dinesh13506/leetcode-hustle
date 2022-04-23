/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let findBestSubArray = function(start, end) {
        if(start > end) {
            return -Infinity
        }
        
        let mid = parseInt((start+end)/2)
        let curr = 0
        let bestLeftSum = 0
        for(let i = mid-1; i>= start; i--) {
            curr = curr + nums[i]
            bestLeftSum = Math.max(bestLeftSum,curr)
        }
        
        curr = 0
        let bestRightSum = 0
        for(let i = mid+1; i<= end; i++) {
            curr = curr + nums[i]
            bestRightSum = Math.max(bestRightSum,curr)
        }
        let bestCombinedSum = nums[mid] + bestLeftSum + bestRightSum
        let leftHalf = findBestSubArray(start, mid-1)
        let rightHalf = findBestSubArray(mid+1,end)
        return Math.max(bestCombinedSum,Math.max(leftHalf,rightHalf))
        
    }
    
    return findBestSubArray(0,nums.length-1)
};