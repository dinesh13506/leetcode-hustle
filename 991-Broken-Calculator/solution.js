/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
 var brokenCalc = function(startValue, target) {
    let ans = 0
    while( target > startValue ) {
        ans++
        if((target & 1) === 1) {
            target++
        } else {
            target = target / 2
        }
    }
    return ans + ( startValue - target )
};