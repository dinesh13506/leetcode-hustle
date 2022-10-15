/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    let memo = new Map();
    let pow = (x, n) => {
        if( n == 0) {
            return 1
        }
        if(memo.has(n)) {
            return memo.get(n);
        }
        if((n&1) == 0) {
            memo.set(n , pow(x, n / 2) * pow(x,n/2));
        } else {
            memo.set(n, x * pow(x, parseInt(n/2)) * pow(x, parseInt(n/2)));
        }
        return memo.get(n);
    }
    return n >= 0 ? pow(x,n) : 1 / pow(x,n);
};