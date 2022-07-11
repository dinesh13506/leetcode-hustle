/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let temp = []
    for(let ch of s) {
        if(ch>= '0' && ch <='9' || ch>='a' && ch <= 'z') {
            temp.push(ch)
        }
    }
    
    temp = temp.join("")
    
    let i = 0, j = temp.length-1
    while(i <= j) {
        if(temp[i] != temp[j]) return false
        i++
        j--
    }
    return true
};