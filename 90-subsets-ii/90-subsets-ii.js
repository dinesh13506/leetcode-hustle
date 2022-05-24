/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
    let n = nums.length
    let map = new Map()
    let ans = []
    let f = function(i,subset) {
        
        if(i >= n) {
            let copy = subset.slice()
            copy.sort(function(a,b) { return a - b})
            let key = copy.join('*')
            if(map.has(key) == false) {
                ans.push(copy)
                map.set(key, true)
            }
            return
        }
        //take
        subset.push(nums[i])
        f(i+1, subset)
        
        //notake
        subset.pop()
        f(i+1, subset)
    }
    
    f(0,[])
    return ans
};