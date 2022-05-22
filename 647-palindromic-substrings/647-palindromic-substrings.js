/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   let count = 0
   let n = s.length
   for(let start = 0; start < n; start++) {
       for(let len = 1; len <= n - start; len++) {
           //console.log(" * " ,s.substr(start, len))
           let str = s.substr(start, len)
           let p1 = 0, p2 = str.length-1
           count = count + 1
           while(p1 <= p2) {
               if(str[p1] != str[p2]) {
                   count--
                   break
               }
               p1++
               p2--
           }
       }
   }
   return count
};