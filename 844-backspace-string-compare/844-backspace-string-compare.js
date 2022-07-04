/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let getStr = (str) => {
        let stack = []
        for(let ch of str) {
            if(ch == '#' && stack.length > 0) {
                stack.pop()
            } else if(ch >= 'a' && ch <= 'z') {
                stack.push(ch)
            }
        }
        return stack.join('')
    }
    
    return getStr(s) == getStr(t)
};