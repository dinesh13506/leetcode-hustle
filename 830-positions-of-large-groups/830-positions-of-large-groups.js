/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    
    let stack = []
    stack.push({value: s[0], start : 0, end : 0, count : 1})
    for(let i = 1; i < s.length; i++) {
        let top = stack[stack.length-1]
        if(top.value == s[i]) {
            top.end = i
            top.count++
        } else {
             stack.push({value: s[i], start : i, end : i, count : 1})
        }
    }
    //console.log(stack)
    let ans = []
    for(let grp of stack) {
        if(grp.count >= 3) {
            ans.push([grp.start, grp.end])
        }
    }
    return ans
};