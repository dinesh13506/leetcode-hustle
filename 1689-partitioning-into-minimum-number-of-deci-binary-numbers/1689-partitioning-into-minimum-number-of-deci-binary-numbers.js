/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    
    let decibin = function(n) {
        for(let ch of n) {
            if(ch == '0' || ch == '1') {
                continue
            }
            return false
        }
        return true
    }
    
    if(decibin(n)) {
        return 1
    }
    let ans = 1
    for(let ch of n) {
        ans = Math.max(ans, parseInt(ch))
    }
    return ans
};