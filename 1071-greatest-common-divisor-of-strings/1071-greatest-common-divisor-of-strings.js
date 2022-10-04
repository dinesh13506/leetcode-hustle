/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    let gcd = (a,b) => {
        if(b == 0) return a
        return gcd(b, a%b)
    }
    if(str1 + str2 == str2 + str1) {
        return str1.substring(0, gcd(str1.length, str2.length))
    } else {
        return ""
    }
};