/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
    let stack = []
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        //console.log(stack)
        if(stack.length > 0) {
            if(stack[stack.length-1].ch == ch) {
                let top = stack.pop()
                top.count++
                if(top.count == k) {
                    //do not push
                } else {
                   stack.push(top) 
                }
                
            } else {
                stack.push({ch: ch, count :  1})
            }
        }
        else {
            stack.push({ch: ch, count :  1})
        }
    }
    
    //console.log(stack)
    return stack.map(function(obj) {
        let ans = ""
        while(obj.count >0) {
            ans+= obj.ch
            obj.count--
        }
        return ans
    }).join('')
};