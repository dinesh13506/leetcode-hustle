/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    
    let karr = []
    while(k) {
        karr.unshift(k%10)
        k = parseInt(k/10)
    }
    let output = []
    let carry = 0
    let i = num.length -1 , j = karr.length - 1
    while(i >=0 && j >= 0) {
        let sum = num[i] + karr[j] + carry
        output.unshift(sum%10)
        carry = parseInt(sum/10)
        i--
        j--
    }
    while(i >=0) {
        let sum = num[i]  + carry
        output.unshift(sum%10)
        carry = parseInt(sum/10)
        i--
    }
    while(j >= 0) {
        let sum = karr[j] + carry
        output.unshift(sum%10)
        carry = parseInt(sum/10)
        j--
    }
    
    if(carry) {
        output.unshift(carry)
    }
    return output
    
};