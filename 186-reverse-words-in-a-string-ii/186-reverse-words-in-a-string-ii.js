/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    let stack = []
    for(let ch of s) {
        if(ch == " ") {
            stack.push(ch)
        } else {
            if(stack.length && stack[stack.length-1] != " ") {
                stack[stack.length - 1] = stack[stack.length - 1] + ch
            } else {
                stack.push("" + ch)
            }
        }
    }
    //console.log(stack)
    let ans = []
    let i = 0
    while(stack.length) {
        let top = stack.pop()
        
        if(top != " ") {
            let arr = top.split("")
            ans.push(...arr)
        } else {
            ans.push(top)
        }
    }
    for(let i = 0; i < ans.length; i++) {
        s[i] = ans[i]
    }
};