/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    const n = height.length
    
    let left_max = new Array(n)
    let right_max = new Array(n)
    for(let i = 0; i < n; i++) {
        left_max[i] = height[i]
        right_max[i] = height[i]
    }
    
    
    for(let i = 1; i < n; i++) {
        left_max[i] = Math.max(height[i], left_max[i-1])
    }
    
    for(let i = n-2; i >=0; i--) {
        right_max[i] = Math.max(height[i], right_max[i+1])
    }
    
    let total = 0
    for(let i = 0; i < n; i++) {
        total += Math.min(left_max[i], right_max[i])
        total-= height[i]
    }
    return total
};