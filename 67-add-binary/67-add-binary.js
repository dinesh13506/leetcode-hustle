/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    const alen = a.length
    const blen = b.length
    
    let carry = 0
    let sumOfTwoBits  = 0
    
    let i = alen - 1 //start from last bit
    let j = blen - 1 //start from last bit
    
    let ans = [] 
    while(i >= 0 && j >= 0) {
        sumOfTwoBits= carry + parseInt(a[i]) + parseInt(b[j])
        carry = parseInt(sumOfTwoBits/2)
        let sumvalue = sumOfTwoBits % 2 // 1 + 1 = 0 , 0 + 1 = 1, 1 + 0 = 1, 0 + 0 = 0
        ans.push(sumvalue)
        i--
        j--
    }
    while(i >= 0 ) {
        sumOfTwoBits = carry + parseInt(a[i])
        carry = parseInt(sumOfTwoBits/2)
        let sumvalue = sumOfTwoBits % 2 // 1 + 1 = 0 , 0 + 1 = 1, 1 + 0 = 1, 0 + 0 = 0
        ans.push(sumvalue)
        i--
    }
    
    while(j >= 0) {
        sumOfTwoBits= carry  + parseInt(b[j])
        carry = parseInt(sumOfTwoBits/2)
        let sumvalue = sumOfTwoBits % 2 // 1 + 1 = 0 , 0 + 1 = 1, 1 + 0 = 1, 0 + 0 = 0
        ans.push(sumvalue)
        j--
    }
    
    if(carry) {
        ans.push(carry)
    }
    //console.log(ans)
    return ans.reverse().join('')
     
};