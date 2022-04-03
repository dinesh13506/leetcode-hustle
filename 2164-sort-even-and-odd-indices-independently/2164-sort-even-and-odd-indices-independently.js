/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    
    let oddIdxArr = [], evenIdxArr = [], len = nums.length
    for(let i = 0; i <len; i++) {
        if(i&1 != 0) {
            oddIdxArr.push(nums[i])  
        } else {
            evenIdxArr.push(nums[i])
        }
    }
    oddIdxArr.sort(function(a,b) { return b - a  })
    evenIdxArr.sort(function(a,b) { return a - b })
    
    let i = 0
    let j = 0
    let k = 0
    while( i < len ) {
        if(i&1 !=0) {
            nums[i] = oddIdxArr[k]
            k++
        } else {
            nums[i] = evenIdxArr[j]
            j++
        }
        i++  
    }
    return nums
    
};