/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let n = nums.length
    let powerset = []
    let f = function(index, arr) {
        
        if(index === n) {
            powerset.push(arr.slice())
            return
        }
        //take it
        arr.push(nums[index])
        f(index+1, arr)
        //not take it
        arr.pop()
        f(index+1, arr)
    }
    
    f(0,[])
    return powerset
};