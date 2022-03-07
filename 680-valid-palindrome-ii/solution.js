/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    return ispalindrome(s)
};

let ispalindrome = function(s) {
    
    let i = 0;
    let j = s.length-1
    
    let p1 = -1
    let p2 = -1
    while(i<=j) {
        if(s[i]!=s[j]) {
            p1 = i
            p2 = j
            break
        }
        i++
        j--
    }
    
    if(p1 == -1 && p2 == -1) {
        return true
    }
    
    let result = true
    i = p1
    j = p2-1
    while(i<=j) {
        if(s[i]!=s[j]) {
            result = false
        }
        i++
        j--
    }
    
    if(result) return true
    result = true
    i = p1 + 1
    j = p2
    while(i<=j) {
        if(s[i]!=s[j]) {
            result = false
        }
        i++
        j--
    }
    
    return result
    
}