/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    
    let length = nums.length
    let lis = new Array(length)
    let count = new Array(length)
    
    let max = 0
    let ans = 0
    for(let i = 0; i < length; i++) {
        lis[i] = 1
        count[i] = 1
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                if(lis[i] === 1+lis[j] ) {
                    count[i] += count[j]
                } 
                if(lis[i] < 1+lis[j]) {
                    lis[i] = 1+lis[j]
                    count[i] = count[j]
                }
                
            }
        }
        if(max === lis[i]) { ans = ans + count[i]}
        if(max < lis[i]) {
            max = lis[i]
            ans = count[i]
        }
    }
    return ans
    
};