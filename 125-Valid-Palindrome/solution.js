/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let output = []
    for(let ch of s) {
        if(ch.toLowerCase()>='a' && ch.toLowerCase()<='z') {
            output.push(ch.toLowerCase())
        } else if(ch >= '0' && ch<='9') {
            output.push(ch)
        }
    }
    
    let i = 0
    let j = output.length - 1
    while(i < j) {
        if(output[i] != output[j]) {
            return false
        }
        i++
        j--
    }
    return true
};