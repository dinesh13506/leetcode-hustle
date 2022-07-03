/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    
    let diffArr = [], n = nums.length
    if(n == 1) {
        return 1
    }
    for(let i = 1; i < n; i++) {
        diffArr.push(nums[i] - nums[i-1])
    }
    //console.log(diffArr)
    let ans = new Array(n-1)
    ans.fill(1)
    
    const positive = "+", negative = "-"
    for(let end = 0; end < diffArr.length; end++) {
        let sign = positive
        if(diffArr[end] > 0) {
            sign = positive
        } else if( diffArr[end] < 0) {
            sign = negative
        } else {
            sign = undefined
        }
        if(!sign) {
            ans[end] = end > 0 ? ans[end-1] : 0
            continue
        }
        for(let start = 0; start < end; start++) {
            if(sign == positive) {
                if(diffArr[start] < 0) {
                    ans[end] = Math.max(ans[end], 1 + ans[start])
                }
            } else if(sign == negative) {
                if(diffArr[start] > 0) {
                    ans[end] = Math.max(ans[end], 1 + ans[start])
                }
            }
        }
    }
    return Math.max(...ans) + 1
};