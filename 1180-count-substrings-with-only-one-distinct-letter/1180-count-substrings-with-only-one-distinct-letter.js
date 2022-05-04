/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function(s) {
    
    let answer = 0
    let countMap = new Map(), left = 0
    for(let right = 0 ; right < s.length; right++) {
        let count = countMap.get(s[right]) || 0
        count++
        countMap.set(s[right], count)
        while(countMap.size > 1) {
            let leftmost = s[left]
            let count = countMap.get(leftmost)
            count--
            if(count == 0) {
                countMap.delete(leftmost)
            } else {
                countMap.set(leftmost,count)
            }
            left++
        }
        let len = right - left + 1
        answer += len
        //console.log(len)
    }
    return answer
};