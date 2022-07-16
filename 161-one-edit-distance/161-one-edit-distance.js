/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    
    if(s == t) {
        return false
    }
    let slen = s.length, tlen = t.length
    if(slen == tlen || slen == tlen + 1 || slen + 1 == tlen) {
        if(slen == tlen) {
                let count = 0
                let i = 0, j = 0
                while(i < slen && j < tlen) {
                    if(s[i] == t[j]) {
                        i++
                        j++
                        continue
                    } else {
                        if(count >= 1) {
                            return false
                        } else {
                            count++
                            i++
                            j++
                        }
                    }
                }
            return true
        } else if(slen < tlen) {
            let i = 0, j = 0, count = 0
            while(i < slen && j < tlen) {
                if(s[i] == t[j]) {
                    i++
                    j++
                    continue
                } else {
                    if(count >= 1) {
                        return false
                    } else {
                        count++
                        j++
                    }
                }

            }
            return true
        } else if(slen > tlen) {
            let i = 0, j = 0, count = 0
            while(i < slen && j < tlen) {
                if(s[i] == t[j]) {
                    i++
                    j++
                    continue
                } else {
                    if(count >= 1) {
                        return false
                    } else {
                        count++
                        i++
                    }
                }
                
            }
            return true
        }
    } else {
        return false
    }
};