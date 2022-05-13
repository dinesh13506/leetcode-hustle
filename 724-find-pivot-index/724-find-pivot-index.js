/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let n = nums.length
    let forward = new Array(n)
    forward.fill(0)
    let backward = new Array(n)
    backward.fill(0)
    for(let i = 0; i < n; i++) {
        forward[i] = ( i > 0 ? forward[i-1] : 0) + nums[i]
    }
    for(let i = n-1; i >= 0; i--) {
        backward[i] = ( i < n - 1 ? backward[i+1] : 0) + nums[i]
    }
    
    //console.log(forward, backward)
    for(let i = 0; i < n; i++) {
        let leftsum = 0
        let rightsum = 0
        if(i > 0) {
            leftsum = forward[i-1]
        }
        if(i < n-1) {
            rightsum = backward[i+1]
        }
        if(leftsum === rightsum) {
            return i
        }
    }
    return -1
};