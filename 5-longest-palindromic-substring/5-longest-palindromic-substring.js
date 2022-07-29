/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let ispalindrome = (start_index, end_index) => {
        while(start_index <= end_index) {
            if(s[start_index] != s[end_index]) {
                return false
            }
            start_index++
            end_index--
        }
        return true
    }
    
    const n = s.length
    let longest = 0, ans = ""
    for(let start = 0; start < n; start++) {
        for(let end = start; end < n; end++) {
            if(ispalindrome(start, end)) {
                let curr_len = end - start + 1
                if(curr_len > longest) {
                    longest = curr_len
                    let palindrome = []
                    let i = start
                    while(i <= end) {
                        palindrome.push(s[i])
                        i++
                    }
                    ans = palindrome.join('')
                }
            }
        }
    }
    return ans
};