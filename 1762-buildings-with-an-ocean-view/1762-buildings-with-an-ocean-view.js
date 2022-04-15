/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let maxHeightToRight = -Infinity
    let answer = []
    for(let i = heights.length - 1; i >=0; i--) {
        if(heights[i] > maxHeightToRight) {
            answer.push(i)
        }
        maxHeightToRight = Math.max(heights[i],maxHeightToRight)
    }
    
    return answer.reverse()
};