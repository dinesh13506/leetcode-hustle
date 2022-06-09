/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    
    let stack = []
    const open = '[', close = ']'
    let mismatch = 0
    for(let ch of s) {
        if(ch == open) {
            stack.push(open)
        } else if(stack.length > 0) {
            stack.pop()
        } else {
            mismatch++
        }
    }
    return parseInt( (mismatch + 1) / 2)
};