/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    
    let stack = []
    let lastIndex = new Map()
    let isAddedToStack = new Map()
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        lastIndex.set(ch,i)
    }
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        if(!isAddedToStack.has(ch)) {
            while(stack.length > 0 && lastIndex.get(stack[stack.length-1]) > i && ch < stack[stack.length-1]) {
                isAddedToStack.delete(stack[stack.length-1])
                stack.pop()
            }
            stack.push(ch)
            isAddedToStack.set(ch,true)
        }
    }
    return stack.join("")
};