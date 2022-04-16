/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
    let remainders = new Array(60)
    remainders.fill(0)
    let ans = 0
    for(let t of time) {
        let rem = t % 60
        if(rem == 0) {
            ans = ans + remainders[0]
        } else {
            ans = ans + remainders[60-rem]
        }
        remainders[rem]++
    }
    return ans 
};