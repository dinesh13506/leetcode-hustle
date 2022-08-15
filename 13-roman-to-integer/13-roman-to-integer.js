/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let map = new Map()
    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)
    map.set('IV', 4)
    map.set('IX', 9)
    map.set('XL', 40)
    map.set('XC', 90)
    map.set('CD', 400)
    map.set('CM', 900)
    
    const n = s.length
    let stack = []
    for(let i = n - 1; i >=0; i--) {
        if(stack.length <= 0) {
            stack.push(s[i])
        }
        else if(s[i] == 'I' && stack[stack.length - 1] == 'V') {
            stack[stack.length - 1] = s[i] + stack[stack.length - 1]
        }
        else if(s[i] == 'I' && stack[stack.length - 1] == 'X') {
            stack[stack.length - 1] = s[i] + stack[stack.length - 1]
        }
        else if(s[i] == 'X' && stack[stack.length - 1] == 'L') {
            stack[stack.length - 1] = s[i] + stack[stack.length - 1]
        }
        else if(s[i] == 'X' && stack[stack.length - 1] == 'C') {
            stack[stack.length - 1] = s[i] + stack[stack.length - 1]
        }
        else if(s[i] == 'C' && stack[stack.length - 1] == 'D') {
            stack[stack.length - 1] = s[i] + stack[stack.length - 1]
        }
        else if(s[i] == 'C' && stack[stack.length - 1] == 'M') {
            stack[stack.length - 1] = s[i] + stack[stack.length - 1]
        } else {
            stack.push(s[i])
        }
    }
    
    let ans = 0
    for(let key of stack) {
        ans  += map.get(key)
    }
    return ans
};