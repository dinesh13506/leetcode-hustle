/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let answer = []
    let getid = (word) => {
        let stack = []
        for(let ch of word) {
            if(stack.length <= 0) {
                stack.push([ch, 1])
            } else {
                let top = stack[stack.length-1]
                if(top[0] == ch) {
                    top[1]++
                } else {
                    stack.push([ch, 1])
                }
            }
        }
        return stack
    }
    
    let compareStacks = (stack1, stack2) => {
        if(stack1.length != stack2.length) {
            return false
        }
        let taken = new Set()
        let map = new Map()
        for(let i = 0; i < stack1.length; i++) {
            
            let top1 = stack1[i]
            let ch1 = top1[0], count1 = top1[1]
            let top2 = stack2[i]
            let ch2 = top2[0], count2 = top2[1]
            
            if(map.has(ch1) && map.get(ch1) == ch2 && count1 == count2) {
                continue
            }
            
            if(map.has(ch1) && (map.get(ch1) != ch2 || count1 != count2)) {
                return false
            }
            if(count1!= count2) {
                return false
            }
            if(taken.has(ch2)) return false
            map.set(ch1,ch2)
            taken.add(ch2)
        }
        //console.log(map)
        return true
    }
    
    let patid = getid(pattern)
    //console.log(patid)
    for(let w of words) {
        let wid = getid(w)
        if(compareStacks(wid, patid)) {
            answer.push(w)
        }
    }
    return answer
};