/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    
    if((n%2) == 0) {
        let ch = 'a'
        let arr = []
        for(let i = 0; i < n-1; i++) {
            arr.push(ch)
        }
        arr.push('b')
        return arr.join("")
    } else {
        let ch = 'a'
        let arr = []
        for(let i = 0; i < n; i++) {
            arr.push(ch)
        }
        return arr.join("")
    }
};