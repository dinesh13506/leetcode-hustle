/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    
    let ans = -Infinity, length = colors.length
    for(let i = 0; i < length; i++) {
        for(let j = i + 1; j<length; j++) {
            if(colors[i]!= colors[j]) {
                ans = Math.max(ans, j - i)
            }
        }
    }
    return ans
};