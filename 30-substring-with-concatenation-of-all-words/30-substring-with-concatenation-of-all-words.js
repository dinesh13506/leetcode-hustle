/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const totalWords = words.length
    
    let wordSize = words[0].length
    let windowSize = totalWords * wordSize
    let map = new Map()
    
    //build count map
    for(let w of words) {
        if(map.has(w) == false) {
            map.set(w,0)
        }
        map.set(w, map.get(w) + 1)
    }
    
    /* check if window is valid -> concat of all words in any order */
    let isvalid = (windowstr) => {
            if(windowstr.length != windowSize) return false
            let cmap = new Map(map)
            let stack = []
            for(let ch of windowstr) {
                //console.log(stack)
                stack.push(ch)
                if(stack.length == wordSize) {
                    let str = stack.join('')
                    if(cmap.has(str) == false || cmap.get(str) <= 0) {
                        return false
                    }
                    cmap.set(str, cmap.get(str) - 1)
                    stack = []
                }
                
            }
            return true
    }
    
    let i = 0
    const n = s.length
    const answer = []
    let windowStr = []
    while(  i < n && i < windowSize  ) {
        windowStr.push(s[i])
        i++
    }
    if(isvalid(windowStr.join(''))) {
        answer.push(i - windowStr.length)
    }
    //console.log(windowStr, i)
    while(i < n) {
        windowStr.shift()
        windowStr.push(s[i])
        //console.log(windowStr, i)
        if(isvalid(windowStr.join(''))) {
            answer.push(i - windowStr.length + 1)
        }
        i++
    }
    return answer
};