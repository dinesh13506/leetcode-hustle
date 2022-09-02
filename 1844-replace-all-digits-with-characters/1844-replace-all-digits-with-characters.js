/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let ans = []
    for(let i = 1; i < s.length; i = i + 2) {
        ans.push(s[i-1])
        let code = s[i-1].charCodeAt()
        let d = parseInt(s[i])
        let ch = String.fromCharCode(code + d)
        ans.push(ch)
    }
    if(ans.length < s.length) {
       ans.push(s[s.length-1]) 
    }
    return ans.join('')
};