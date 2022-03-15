/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    
    let result = new Array() 
    let stack = []
    const length = s.length
    const open = '('
    const close = ')'
    let indexesToRemove = new Set()
    
    //O(length)
    for(let i = 0; i < length; i++) {
        let ch = s[i]
        if(ch === open) {
            stack.push(i)
        } else if(ch === close) {
            if(stack.length<=0) {
                indexesToRemove.add(i) //index of close brackets
            } else {
                stack.pop()
            }
        }
    }
    
    //index of open brackets O(length)
    while(stack.length > 0) {
        let index = stack.pop()
        indexesToRemove.add(index)
    }   
    //O(length)
    for(let i = 0; i < length; i++) {
        if(indexesToRemove.has(i) === false) {
            result.push(s[i])
        }
    }
    return result.join('') //O(length)
};