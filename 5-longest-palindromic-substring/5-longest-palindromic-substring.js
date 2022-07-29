/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    const n = s.length
    let expand = (i,j) => {
        let len = 0, start = i+1, end = j-1
        while(i >=0 && j < n) {
            if(s[i] == s[j]) {
                len = len + 2
                start = i
                end = j
                i--
                j++
            } else {
                break
            }
        }
        return [len, start, end]
    }
    
    let start = 0, end = 0, longest = 1
    for(let i = 1; i < n; i++) {
        if(s[i] == s[i-1]) {
            let response = expand(i-2, i+1)
            let curr_len = 2 + response[0]
            if(curr_len > longest) {
                start = response[1], end = response[2]
                longest = curr_len
            }
        }
        
        let response = expand(i-1, i+1)
        let curr_len = 1 + response[0]
        if(curr_len > longest) {
            start = response[1], end = response[2]
            longest = curr_len
        }
    }
    //console.log(longest)
    let answer = []
    while(start <= end) {
        answer.push(s[start])
        start++
    }
    return answer.join('')
};