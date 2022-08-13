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
    
    let i = 0
    const n = s.length
    const answer = []
    while(i < n && i + windowSize - 1 < n) {
        
        /*get substr string from i till windowsize*/
        let substr = () => {
            let j = i
            let arr = []
            while(j < i + windowSize) {
                arr.push(s[j])
                j++
            }
            return arr.join('')
        }
        let windowstr = substr()
        
        /* check if window is valid -> concat of all words in any order */
        let isvalid = () => {
            let cmap = new Map(map)
            let stack = []
            for(let ch of windowstr) {
                //console.log(stack)
                if(stack.length == wordSize) {
                    let str = stack.join('')
                    if(cmap.has(str) == false || cmap.get(str) <= 0) {
                        return false
                    }
                    cmap.set(str, cmap.get(str) - 1)
                    stack = []
                }
                stack.push(ch)
            }
            if(stack.length == wordSize) {
                let str = stack.join('')
                if(cmap.has(str) == false || cmap.get(str) <= 0) {
                        return false
                }
                cmap.set(str, cmap.get(str) - 1)
                stack = []
            }
            return true
        }
        if(isvalid()) {
            answer.push(i)
        }
        i = i + 1
    }
    return answer
};