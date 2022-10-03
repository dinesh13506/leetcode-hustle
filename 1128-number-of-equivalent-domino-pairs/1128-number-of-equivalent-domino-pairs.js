/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    for(let dom of dominoes) {
       dom.sort((a,b) => {
           return a - b
       }) 
    }
    dominoes.sort((a,b) => {
        if(a[0] == b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    
    let stack = []
    for(let dom of dominoes) {
        if(stack.length == 0) stack.push([dom,1n])
        else {
            let top = stack[stack.length - 1]
            if(top[0][0] == dom[0] && top[0][1] == dom[1]) {
                top[1]++
            } else {
                stack.push([dom,1n])
            }
        }
    }
    //console.log(stack)
    
    let fact = (n) => {
        let ans = 1n
        let i = 1n
        while(i <= n) {
            ans *= i
            i++
        }
        return ans
    }
    let ans= 0n
    while(stack.length) {
        let top = stack.pop()
        //console.log(top[1])
        if(top[1] >= 2) {
           ans += (top[1] * (top[1] - 1n) ) / 2n 
        } 
    }
    return ans
};