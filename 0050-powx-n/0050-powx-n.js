/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    let pow = (x, n) => {
        if( n == 0) {
            return 1;
        }
        let temp = pow(x, parseInt(n/2));
        if(n%2 == 0) {
            return temp * temp;
        } else {
            return x * temp * temp;
        }
    }
    
    let value = pow(x, Math.abs(n));
    if(n >= 0) return value;
    return 1/value;
};