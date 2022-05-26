/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bin = dec2bin(n)
    let count = 0
    for(let b of bin) {
        if(b == '1') {
            count++
        }
    }
    return count
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}