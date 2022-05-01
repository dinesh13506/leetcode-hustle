/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = []
    let stack2 = []
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        if(ch === '#') {
            stack1.length > 0 ? stack1.pop() : true
            continue
        }
        stack1.push(ch)
    }
    for(let i = 0; i < t.length; i++) {
        let ch = t[i]
        if(ch === '#') {
            stack2.length > 0 ? stack2.pop() : true
            continue
        }
        stack2.push(ch)  
        
    }
    //console.log(stack1,stack2)
    
    return stack1.join('') == stack2.join('')
};