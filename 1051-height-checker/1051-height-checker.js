/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let expected = heights.slice()
    expected.sort(function(a,b) {
        return a - b
    })
    let count = 0
    for(let i = 0; i < heights.length; i++) {
        if(expected[i] != heights[i]) {
            count++
        }
    }
    return count
};