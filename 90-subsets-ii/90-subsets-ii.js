/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
    nums.sort(function(a,b) {
        return a - b
    })
    
    let n = nums.length
    let ans = []
    let f = function(index, arr) {
        ans.push(arr.slice())
        for(let i = index; i < n; i++) {
            if( i != index && nums[i] == nums[i-1]) {
                continue
            }
            arr.push(nums[i])
            f(i+1, arr)
            arr.pop()
        }
    }
    
    f(0,[])
    return ans
};