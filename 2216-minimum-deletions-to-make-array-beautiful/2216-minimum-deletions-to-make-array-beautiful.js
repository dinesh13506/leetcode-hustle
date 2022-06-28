/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    
    
    let isbeautiful = () => {
        if(nums.length %2 != 0) return false
        let flag = true
        for(let i = 0; i <=nums.length - 2; i++) {
            if(i%2 == 0) {
                if(nums[i] != nums[i+1]) {
                    continue
                } else {
                    return false
                }
            }
        }
        return true
    }
    
    if(isbeautiful()) {
        return 0
    }
    let stack = [], count = 0
    for(let num of nums) {
        //console.log(num, stack,count)
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