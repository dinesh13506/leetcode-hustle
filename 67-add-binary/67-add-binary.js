/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const zeroAsc = '0'.charCodeAt()
    let map = {
        '0' : '0'.charCodeAt() - zeroAsc,
        '1' : '1'.charCodeAt() - zeroAsc
    }
    let sum = function(s1,s2) {
        let output = []
        let i = s1.length - 1, j = s2.length -1
        let carry = 0
        while(i >= 0 && j >= 0) {
            let c1 = map[s1[i]], c2 = map[s2[j]]
            let sum = (c1+c2 + carry)
            output.unshift(sum % 2)
            carry = parseInt(sum / 2)
            i--
            j--
        }
        while(i >= 0) {
            let c1 = map[s1[i]], c2 = map['0']
            let sum = (c1+c2 + carry) 
            output.unshift(sum % 2)
            carry = parseInt(sum/2)
            i--
        }
        while(j >= 0) {
            let c1 = map['0'], c2 = map[s2[j]]
            let sum = (c1 + c2 + carry) 
            output.unshift(sum % 2)
            carry = parseInt(sum/2)
            j--
        }
        if(carry) {
            output.unshift(carry)
        }
        return output.join('')
    }
    
    return sum(a,b)
};