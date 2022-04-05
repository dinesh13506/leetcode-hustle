/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    let matches = 0
    while(n != 1) {
        if(n&1) {
           matches = matches + (n-1)/2 
            n =  ((n-1)  / 2) + 1
        } else {
            matches = matches + (n)/2 
            n = n / 2
        }
    }
    return matches
};