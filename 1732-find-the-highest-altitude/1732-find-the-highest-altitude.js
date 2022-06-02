/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let highest = 0
    let sum = 0
    for(let i = 0; i < gain.length; i++) {
        sum = sum + gain[i]
        highest = Math.max(highest, sum)
    }
    return highest
};