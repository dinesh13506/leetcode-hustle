/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    
    let output = []
    let carry = 0
    let i = num.length -1
    while(i >=0 && k) {
        let sum = num[i] + (k%10) + carry
        output.unshift(sum%10)
        carry = parseInt(sum/10)
        i--
        k = parseInt(k/10)
    }
    while(i >=0) {
        let sum = num[i]  + carry
        output.unshift(sum%10)
        carry = parseInt(sum/10)
        i--
    }
    while(k) {
        let sum = (k%10) + carry
        output.unshift(sum%10)
        carry = parseInt(sum/10)
        k = parseInt(k/10)
    }
    
    if(carry) {
        output.unshift(carry)
    }
    return output
    
};