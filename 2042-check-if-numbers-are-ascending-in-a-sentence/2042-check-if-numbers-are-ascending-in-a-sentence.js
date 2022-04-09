/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    
    let tokens = s.split(" ")
    let prev = 0
    for(let token of tokens) {
       let num = parseInt(token)
       if(!isNaN(num)) {
           if(num > prev) {
               prev = num
               continue
           } else {
               return false
           }
       }
    }
    if(prev==0) {
        return false
    }
    return true
};