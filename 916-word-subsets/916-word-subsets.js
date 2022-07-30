/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    
    let answer = []
    let memo = new Map()
    let getCountMap = (word) => {
        let count = new Array(26)
        count.fill(0)
        for(let ch of word) {
            let index = ch.charCodeAt() - 'a'.charCodeAt()
            count[index]++
        }
        return count
    }
    
   let w2max = getCountMap("")
   for(let w2 of words2) {
       let count = getCountMap(w2)
       for(let i = 0; i < 26; i++) {
           w2max[i] = Math.max(w2max[i], count[i])
       }
   }

    for(let w1 of words1) {
        let count = getCountMap(w1)
        answer.push(w1)
        for(let i = 0; i < 26; i++) {
           if(w2max[i] <= count[i]) {
               continue
           } else {
               answer.pop()
               break
           }
       }
    }
    return answer
    
};