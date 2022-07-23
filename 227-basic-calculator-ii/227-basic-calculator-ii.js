/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = []
    let sign = '+'
    const n = s.length
    
    let isDigit = (ch) => {
        return ch >= '0' && ch <= '9'
    }
    for(let i = 0; i < n; i++) {
        if(isDigit(s[i])) {
            let value = 0
            while(i < n && isDigit(s[i])) {
                value = value * 10 + (s[i].charCodeAt() - '0'.charCodeAt())
                i++
            }
            i--
            if(sign == '+') {
                stack.push(value)
            } else if( sign == '-') {
                stack.push(-value)
            } else if(sign == '/') {
                let top = stack.pop()
                stack.push(parseInt(top/value))
            } else {
                let top = stack.pop()
                stack.push(parseInt(top * value))
            }
        } else if(s[i] != ' ') {
            sign = s[i]
        }
    }
    
    let sum = 0
    for(let value of stack) {
        sum += value
    }
    return sum
};