/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    weight.sort(function(a,b) { return a - b})
    let i = 0, len = weight.length,count = 0, limit = 5000
    while( i < len ) {
        if(weight[i] <= limit) {
            count++
            limit = limit - weight[i]
            if(limit<=0) {
                break
            }
        }
        i++
    }
    return count
};