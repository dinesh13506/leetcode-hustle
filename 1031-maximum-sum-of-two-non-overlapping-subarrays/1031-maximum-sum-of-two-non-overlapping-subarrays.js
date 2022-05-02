/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    let getSubArraySum = function(k) {
        let ans = [], sum = 0
        for(let i = 0; i < k; i++) {
            sum += nums[i]
        }
        ans.push({start: 0, end : k-1, sum : sum})
        for(let right = k; right < nums.length; right++) {
            sum = sum + (nums[right] - nums[right-k])
            ans.push({start: right-k+1, end : right, sum : sum})
        }
        return ans
    }
    
    let arr1 = getSubArraySum(firstLen)
    let arr2 = getSubArraySum(secondLen)
    //console.log(arr1,arr2)
    let op = -1
    for(let a of arr1) {
        for(let b of arr2) {
            if(a.end < b.start || a.start > b.end) {
                op = Math.max(op, a.sum + b.sum)
            }
        }
    }
    return op
};