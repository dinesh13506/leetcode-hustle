/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    const open = '[', close = ']'
    let stack = []
    let i = 0
    while(i < s.length) {
        if(s[i] == close) {
            let str = []
            while(stack.length && stack[stack.length - 1] != open) {
                str.push(stack.pop())
            }
            stack.pop()
            let count = stack.pop()
            let concat = [], temp = str.reverse().join("")
            while(count > 0) {
                concat.push(temp)
                count--
            }
            stack.push(concat.join(""))
            i++
        } else {
            if(s[i] >= '0' && s[i] <= '9') {
                let num = []
                while( i < s.length && s[i] >= '0' && s[i] <= '9') {
                    num.push(s[i])
                    i++
                }
                stack.push(num.join(""))
            }
            else {
                stack.push(s[i])
                i++
            }
        }
    }
    return stack.join("")
};