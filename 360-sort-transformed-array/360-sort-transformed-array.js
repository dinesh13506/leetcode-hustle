/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
    
    let ans = []
    for(let x of nums) {
        
        let f = 0
        f += (a * x * x)
        f += (b * x)
        f +=  c
        ans.push(f)
    }
    
    ans.sort((a,b)=> {
        return a - b
    })
    return ans
};