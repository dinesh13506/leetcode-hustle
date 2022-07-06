/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    let add = function(x, y) {
        let first = x.length > y.length ? x : y
        let second = x.length > y.length ? y : x
        first = first.split('').reverse()
        second = second.split('').reverse()
        let carry = 0
        
        let answer = []
        
        for(let i = 0; i < second.length; i++) {
            let sum = parseInt(first[i]) + parseInt(second[i]) + carry
            let d = sum % 10
            answer.push(d)
            carry = parseInt(sum/10)
        }
        for(let i = second.length; i < first.length; i++) {
            let sum = parseInt(first[i]) + carry
            let d = sum % 10
            answer.push(d)
            carry = parseInt(sum/10)
        }
        if(carry > 0) {
            answer.push(carry)
        }
        return answer.reverse().join("")
    }
    
    let product = function(x, y) {
        if(x == "0" || y == "0") return "0"
        let first = x.length > y.length ? x : y
        let second = x.length > y.length ? y : x
        if(second.localeCompare(first) < 0) {
            let t = first
            first = second
            second  = t
        }
        first = first.split('').reverse()
        second = second.split('').reverse()
        
        
        let result = []
        let tens = ""
        for(let s of second) {
            let carry = 0
            let answer = []
            for(let f of first) {
                let p = (parseInt(s) * parseInt(f)) + carry
                let d = p % 10
                answer.push(d)
                carry = parseInt( p / 10)
            }
            if(carry > 0) {
                answer.push(carry)
            }
            answer.unshift(tens)
            //console.log(answer)
            result.push(answer.reverse().join(''))
            tens = tens + "0"
        }
        
        //console.log(result)
        return result
    }
    let result = product(num1, num2)
    let sum = ""
    for(let res of result) {
        sum = add(sum, res)
    }
    
    return sum
    
    
};