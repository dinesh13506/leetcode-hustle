/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let count = k
    let stack = []
    for(let ch of num) {
        while(count && stack.length && stack[stack.length-1] > parseInt(ch)) {
            stack.pop()
            count--
        }
        stack.push(parseInt(ch))
    }
    while(count) {
        stack.pop()
        count--
    }
    let ans = []
    let startwithzero = true
    for(let n of stack) {
        if(n == 0 && startwithzero) {
            continue
        }
        startwithzero = false
        ans.push(n)
    }
    if(ans.length == 0) return "0"
    return ans.join("")
};