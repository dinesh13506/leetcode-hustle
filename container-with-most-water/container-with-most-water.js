/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let i = 0, j = height.length - 1, max = -Infinity
    while(i < j) {
        let area = (j - i) * Math.min(height[i],height[j])
        max = Math.max(area,max)
        if(height[i] < height[j]) i++
        else j--
    }
    return max
};