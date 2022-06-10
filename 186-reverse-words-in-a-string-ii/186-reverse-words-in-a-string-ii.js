/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    let i = 0, j = s.length - 1
    while(i <= j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
    //console.log(s)
    
    let start = 0
    while(start < s.length) {
        let end = start
        while(end < s.length && s[end] != ' ') {
            end++
        }
        let p1 = start
        let p2 = end -1
        while(p1 <= p2) {
            let temp = s[p1]
            s[p1] = s[p2]
            s[p2] = temp
            p1++
            p2--
        }
        start = end+1
        end++
    }
};