/**
 * @param {number} n
 * @return {string[]}
 */
 let pairs = [['0','0'],['1','1'],['8','8'],['6','9'],['9','6']]
 var findStrobogrammatic = function(n) {
     return helper(n,n)
 };
 
 
 let helper = function(n, final_size) {
     if(n == 0) {
         return [""]
     }
     if(n==1) {
         return["0","1","8"]
     }
     
     let prev = helper(n-2,final_size)
     let curr = []
     for( let i = 0; i < prev.length;i++) {
         for( let j = 0; j < pairs.length; j++) {
             if(pairs[j][0]!='0' || n!=final_size) {
                 curr.push(pairs[j][0] + prev[i] +pairs[j][1])
             }
         }
     }
     return curr
 }