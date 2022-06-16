/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    let ans = ""
    let len1 = str1.length, len2 = str2.length
    let len = len1 > len2 ? len2 : len1
    let prefix1 = "", prefix2 = ""
    for(let i = 0; i < len; i++) {
        prefix1 = prefix1 + str1[i]
        prefix2 = prefix2 + str2[i]
        let l = i + 1
        if(prefix1 == prefix2 && (len1 % l == 0) && (len2 % l == 0)) {
            let c1 = len1 / l
            let c2 = len2 / l
            let s1 = ""
            while(c1 > 0) {
                s1 = s1 + prefix1
                c1--
            }
            let s2 = ""
            while(c2 > 0) {
                s2 = s2 + prefix2
                c2--
            }
            if(s1 == str1 && s2 == str2) {
                ans = ans.length < prefix1.length ? prefix1 : ans
            }
        }
        
    }
    return ans
};