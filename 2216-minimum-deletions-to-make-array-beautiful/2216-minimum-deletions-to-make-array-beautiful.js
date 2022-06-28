/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    let stack = [], count = 0
    for(let num of nums) {
        if(stack.length <= 0 || stack[stack.length-1] != num) {
            stack.push(num)
        } else {
            let idx = stack.length - 1
            if(idx % 2 ==0 ) {
                count++
            } else {
                stack.push(num)
            }
            
        }
    }
    
    count += (stack.length % 2) == 0 ? 0 : 1
    return count
};