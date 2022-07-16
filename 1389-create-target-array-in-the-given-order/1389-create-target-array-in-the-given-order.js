/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let answer = new Array(nums.length)
    answer.fill(null)
    let shiftToRight = (i) => {
        
        let index = answer.length - 1
        while(index > i) {
            answer[index] = answer[index - 1]
            index--
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        let value = nums[i]
        let idx = index[i]
        if(answer[idx] == null) {
            answer[idx] = value
        } else {
            shiftToRight(idx)
            answer[idx] = value
        } 
    }
    return answer
};