/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
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
    let multiply = function(s1,s2) {
        if(s2 == "0" || s1 == "0") {
            return "0"
        }
        let carry = 0
        let shift = 0
        let ans = "0"
        for(let i = s2.length-1; i>=0; i--) {
            let c2 = map[s2[i]]
            let output = []
            let carry = 0
            for(let j = s1.length-1; j>=0; j--) {
                let c1 = map[s1[j]]
                //console.log(c1,c2)
                let p = (c1 * c2) + carry
                output.unshift(p%10)
                carry = parseInt(p/10)
            }
            if(carry) {
                output.unshift(carry)
            }
            let count = shift
            while(count) {
                output.push(0)
                count--
            }
            shift++
            ans = sum(ans , output.join(''))
            //console.log(ans)
        }
        return ans
    }
    
    return num1.length > num2.length ? multiply(num1,num2) : multiply(num2,num1)
    
};