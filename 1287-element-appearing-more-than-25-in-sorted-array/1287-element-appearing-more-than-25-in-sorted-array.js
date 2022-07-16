/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let stack = []
    let count = 0, total = arr.length
    for(let num of arr) {
        if(stack.length == 0) {
            stack.push([num,1])
            if((1/ total) > 0.25) {
                return num
            }
        } else if( stack[stack.length-1][0] == num) {
            stack[stack.length-1][1]++
            if((stack[stack.length-1][1]/ total) > 0.25) {
                return num
            }
        }
        else {
            stack.pop()
            stack.push([num,1])
            if((1/ total) > 0.25) {
                return num
            }
        } 
    }
    return -1
};