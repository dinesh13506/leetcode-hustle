/**
 * @param {string} s
 * @return {number}
 */
let sp = Math.pow(2,31)
const lowest = -1 * sp
const highest = sp - 1
var myAtoi = function(s) {
    if(s.length == 0) return 0
    s = s.trim().split(' ')[0]
    s = s.replace(' ','')
    let p = 0
    let num = 0
    let last = 0

    let input = ""
    for(let i = 1; i < s.length; i++) {
        let ch =  s[i]
        if(ch >= '0' && ch<= '9') {
            input = input + ch
        } else {
            break
        }
    }
    input = s[0] + input
    let sign = input[0]
    let len = input.length
    //console.log("input " , input)
    if(sign == '+' || sign == "-") {
        last = 1
    } else if(!(sign >= '0' && sign <= '9')) {
        return 0
    }
    for(let i = len-1; i>=last; i--) {
        //console.log(input[i])
        if(input[i] >= '0' && input[i] <= '9') {
            let x = parseInt(input[i])
            num = num + ( Math.pow(10,p) * x )
            //console.log(num)
            p++
        } else {
            //console.log("break")
            break
        }
    }
    if(sign == '-') {
        num = -1 * num
    }
    return num < lowest ? lowest : (num > highest) ? highest: num
};