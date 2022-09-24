/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    
    let stack = []
    let map = new Map()
    for(let ch of text) {
        let count = map.get(ch) || 0
        count++
        map.set(ch, count)
    }
    for(let ch of text) {
        if(stack.length <= 0) {
            stack.push([ch,1])
            continue
        }
        let top = stack[stack.length-1]
        if(top[0] == ch) {
            stack.pop()
            stack.push([top[0], top[1] + 1])
        } else {
            stack.push([ch,1])
        }
    }
    //console.log(map)
    //console.log(stack)
    let ans = 0
    for(let grp of stack) {
        let c1 = grp[1]
        let total = map.get(grp[0])
        let left = total- c1 
        let len = 0
        if(left > 0 ) {
            len = grp[1] + 1
        } else {
            len = grp[1]
        }
        ans = Math.max(ans,len)
    }
    
    for(let i = 0; i < stack.length; i++) {
        if(i == 0 || i == stack.length -1) {
            continue
        }
        let grp = stack[i]
        let grp1 = stack[i-1]
        let grp2 = stack[i+1]
        if(grp1[0] == grp2[0] && grp[1] == 1) {
            let c1 = grp1[1], c2 = grp2[1]
            let total = map.get(grp1[0])
            let left = total- c1 - c2
            let len = 0
            if(left > 0) {
                len = c1 + c2 + 1
            } else if(left == 0) {
                len = c1 + c2
            }
            ans = Math.max(ans,len)
        }
    }
    return ans
};