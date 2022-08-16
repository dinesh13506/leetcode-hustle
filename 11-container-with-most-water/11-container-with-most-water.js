/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let max = 0
    let p1 = 0, p2 = height.length - 1
    while(p1 < p2) {
        
        let currArea = (p2 - p1) * Math.min(height[p1], height[p2])
        max = Math.max(currArea, max)
        if(height[p1] < height[p2]) {
            p1++
        } else {
            p2--
        }
    }
    return max
};