/**
 * @param {string} s
 * @return {boolean}
 */
 let stack = null
 var isValid = function(s) {
     
 
     
     stack = new Array()
     
     for(let ch of s) {
         if(['(','{','['].includes(ch)) {
             stack.push(ch)
         } else {
             if(ch == '}') {
                 let top = getTop()
                 if(top && top == '{') {
                     stack.pop()
                 } else {
                     return false
                 }
             } else if(ch == ')') {
                 let top = getTop()
                 if(top && top == '(') {
                     stack.pop()
                 } else {
                     return false
                 }
             } else if(ch == ']') {
                 let top = getTop()
                 if(top && top == '[') {
                     stack.pop()
                 } else {
                     return false
                 }
             }
         }
     }
     return stack.length ? false : true
 };
 
 let getTop = function() {
     if(stack.length>0) {
         return stack[stack.length-1]
     }
     return null
 }