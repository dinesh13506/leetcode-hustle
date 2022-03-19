/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let i = 0
    let lCount = 0
    let rCount = 0
    let result = 0
    while(i < s.length) {
        let ch = s[i]
        ch === "L" ? lCount++ : rCount++
        if(lCount === rCount) {
            result++
            lCount = 0
            rCount = 0
        }
        i++
    }
    return result
};