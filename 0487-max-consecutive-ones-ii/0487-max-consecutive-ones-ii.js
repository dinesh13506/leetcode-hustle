/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let stack = [];
    let max = 1;
    for(let num of nums) {
        if(stack.length == 0) {
            stack.push({
                count : 1,
                value : num
            });
            if(num) {
                    max = Math.max(max, 1);
            }
        } else {
            let top = stack[stack.length - 1];
            if(top.value == num) {
                top.count++;
                if(num) {
                    max = Math.max(max, top.count);
                }
            } else {
               stack.push({
                count : 1,
                value : num
               });
               if(num) {
                    max = Math.max(max, 1);
               }
            }
        }
    }
    //console.log(stack, max);
    
    //0 on left
    for(let i = 1; i < stack.length; i++) {
        let left = stack[i-1];
        let curr = stack[i];
        if(curr.value == 1 && left.value == 0) {
           max = Math.max(max, curr.count + 1);
        }
    }
    //0 on right
    for(let i = stack.length - 2; i >=0 ; i--) {
        let right = stack[i + 1];
        let curr = stack[i];
        if(curr.value == 1 && right.value == 0) {
           max = Math.max(max, curr.count + 1);
        }
    }
    
    // 0 in between
    for(let i = 1; i < stack.length - 1; i++) {
        let left = stack[i-1];
        let curr = stack[i];
        let right = stack[i + 1];
        if(curr.value == 0 && curr.count == 1 && left.value == 1 && right.value == 1) {
            max = Math.max(max, left.count + right.count + 1);
        }
    }
    return max;
    
};