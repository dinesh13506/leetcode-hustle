/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    const zeroAsc = '0'.charCodeAt()
    let map = {
        '0' : '0'.charCodeAt() - zeroAsc,
        '1' : '1'.charCodeAt() - zeroAsc,
        '2' : '2'.charCodeAt() - zeroAsc,
        '3' : '3'.charCodeAt() - zeroAsc,
        '4' : '4'.charCodeAt() - zeroAsc,
        '5' : '5'.charCodeAt() - zeroAsc,
        '6' : '6'.charCodeAt() - zeroAsc,
        '7' : '7'.charCodeAt() - zeroAsc,
        '8' : '8'.charCodeAt() - zeroAsc,
        '9' : '9'.charCodeAt() - zeroAsc,
    }
    let sum = function(s1,s2) {
        let output = []
        let i = s1.length - 1, j = s2.length -1
        let carry = 0
        while(i >= 0 && j >= 0) {
            let c1 = map[s1[i]], c2 = map[s2[j]]
            let sum = (c1+c2 + carry)
            output.unshift(sum % 10)
            carry = parseInt(sum / 10)
            i--
            j--
        }
        while(i >= 0) {
            let c1 = map[s1[i]], c2 = map['0']
            let sum = (c1+c2 + carry) 
            output.unshift(sum % 10)
            carry = parseInt(sum/10)
            i--
        }
        while(j >= 0) {
            let c1 = map['0'], c2 = map[s2[j]]
            let sum = (c1 + c2 + carry) 
            output.unshift(sum % 10)
            carry = parseInt(sum/10)
            j--
        }
        if(carry) {
            output.unshift(carry)
        }
        return output.join('')
    }
    
    return sum(num1,num2)
    
    
};