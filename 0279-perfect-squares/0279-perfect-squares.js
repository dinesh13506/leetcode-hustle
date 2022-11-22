/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    let isSquare = (num) => {
        if(num >= 1) {
            let x = parseInt(Math.sqrt(num));
            return (x * x) == num;
        }
        return false;
    }
    
    let memo = new Map();
    
   let dp = (sum) => {
       if(sum < 0) {
           return Infinity; //not possible
       }
       if(sum  == 0) {
           return 0;
       }
       if(isSquare(sum)) {
           return 1;
       }
       if(memo.has(sum)) return memo.get(sum);
       let ans = Infinity;
       for(let i = sum; i >= 1; i--) {
           if(isSquare(i)) {
               ans = Math.min(ans, 1 + dp(sum - i));
           }
       }
       memo.set(sum, ans);
       return ans;
   }
   return dp(n);
    
};