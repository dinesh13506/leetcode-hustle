/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    
    let n = nums.length
    let forwardSum = new Array(n)
    let backwardSum = new Array(n)
    let sum = 0
    for(let i = 0; i < n; i++) {
        sum += nums[i]
        forwardSum[i] = sum
    }
    sum = 0
    for(let j = n-1; j >=0; j--) {
        sum += nums[j]
        backwardSum[j] = sum
    }
    
    //console.log(forwardSum, backwardSum)
    let index = -1
    for(let i = 0 ; i < n; i++) {
        if(forwardSum[i] - backwardSum[i] == 0) {
            index = i
            break
        }
    }
    return index
    
};