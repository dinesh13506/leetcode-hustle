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
                stack[stack.length - 1].push(ch)
            } else {
                stack.push([ch])
            }
        }
    }
    let ans = []
    let i = 0
    //console.log(stack)
    while(stack.length) {
        let top = stack.pop()
        
        if(top != " ") {
            ans.push(...top)
        } else {
            ans.push(top)
        }
    }
    for(let i = 0; i < ans.length; i++) {
        s[i] = ans[i]
    }
};