/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let carry = 0,  c = 1
    for(let i = digits.length - 1; i>=0; i--) {
        let sum = digits[i] + carry + c
        digits[i] = sum % 10
        carry = parseInt(sum/10)
        c = 0
    }
    if(carry) {
        digits.unshift(carry)
    }
    return digits
};