/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   let count = 0
   let n = s.length
   let memo = new Map()
   memo.set('',true)
    
   for(let len = 1; len <= n; len++) {
       for(let start = 0; start <= n - len; start++) {
           let str = s.substr(start, len)
           let prev = str.slice(1, str.length-1)
           //console.log("curr => " ,s.substr(start, len))
           //console.log("small => ", str.slice(1, -1), memo.get(str.slice(1, -1)))
           if(str.length == 1) {
               count++
               //console.log("plaindrome => ", str)
               memo.set(str, true)
               continue
           }
           let firstChar = str[0]
           let lastChar = str[str.length-1]
          
           if(firstChar === lastChar && memo.get(prev) == true) {
               count++
               //console.log("plaindrome => ", str)
               memo.set(str, true)
           } else {
               memo.set(str, false)
           }
       }
   }
   return count
};