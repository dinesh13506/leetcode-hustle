/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    const pow = Math.pow(2,31)
    let min = -1 * pow
    let max = pow - 1
    let totalDigits = function(num) {
        let count = 0
        while(num){
            num = parseInt(num/10)
            count++
        }
        return count
    }
    let sign = 1
    if(x < 0) {
        sign = -1
    }
    x = x > 0 ? x : -1 * x
    let count = totalDigits(x)
    let output = 0
    while(count > 0 && x){
        let d = x % 10
        x = parseInt(x/10)
        output += d * Math.pow(10,count-1)
        count--
    }
    output = output * sign
    
    if(output < min || output > max) {
        return 0
    }
    return output
};