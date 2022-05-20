/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    
    let s1 = ('' + n).split('')
    s1.sort(function(a,b) {
        if(a.charCodeAt() == b.charCodeAt()) {
            return 0
        }
        else if(a.charCodeAt() < b.charCodeAt()) {
            return -1
        }
        else {
            return 1
        }
    })
    for(let i = 0; i < 31; i++) {
        let s2 = ('' + (1 << i)).split('')
        s2.sort(function(a,b) {
            if(a.charCodeAt() == b.charCodeAt()) {
                return 0
            }
            else if(a.charCodeAt() < b.charCodeAt()) {
                return -1
            }
            else {
                return 1
            }
        })
        if(s1.join() == s2.join()) {
            return true
        } 
    }
    
    return false
    
};