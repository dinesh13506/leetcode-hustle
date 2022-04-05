/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    
    let i = 0, n = colors.length, j = n-1
    while(colors[0] == colors[j]) { j-- }
    while(colors[n-1] == colors[i]) { i++ }
    return Math.max(j,n-1-i)
};