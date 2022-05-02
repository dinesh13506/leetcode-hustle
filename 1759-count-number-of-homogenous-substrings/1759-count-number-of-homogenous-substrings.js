/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    
    let modulo = Math.pow(10,9) + 7
    let length = s.length
    let prev = s[0]
    let i = 0 , ans = 0
    while(i < length) {
        let start = i
        while(s[i] == prev) {
            prev = s[i]
            i++
        }
        let end = i
        prev = s[end]
        //console.log(start,end)
        let n = end - start
        ans = (ans % modulo) + (parseInt((n) * (n + 1)/ 2)) % modulo
    }
    return ans
};