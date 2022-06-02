/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    
    let result = new Array(length)
    result.fill(0)
    for(let update of updates) {
        let start = update[0], end = update[1], value = update[2]
        result[start] = result[start] + value
        if(end + 1 < length) {
            result[end + 1] = result[end + 1] - value
        }
    }
    
    for(let i = 1; i < length; i++) {
        result[i] = result[i] + result[i-1]
    }
    return result
};