/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
   let n = s.length //length
   let set = new Set() //store distinct strings of length k
   
   for(let start = 0; start <= n - k; start++) {
       let str = [] //string of length k
       for(let i = start; i < start + k; i++) {
           str.push(s[i])
       }
       str = str.join('')
       if(set.has(str) == false) {
           set.add(str)
       }
   }
   return set.size === (1 << k)
};