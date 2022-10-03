/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    
    let map = new Map()
    for(let pair of similarPairs) {
        let [w1, w2] = pair
        if(map.has(w1) == false) {
            map.set(w1, [])
        }
        if(map.has(w2) == false) {
            map.set(w2, [])
        }
        map.get(w1).push(w2)
        map.get(w2).push(w1)
    }
    
    
    
    
    
    if(sentence1.length != sentence2.length) return false
    const n = sentence1.length
    
    for(let i = 0; i < n; i++) {
        let w1 = sentence1[i], w2 = sentence2[i]
        if(w1 == w2) continue
        
        if(map.has(w1) && map.get(w1).includes(w2) == false) {
            return false
        }
        if(map.has(w2) && map.get(w2).includes(w1) == false) {
            return false
        }
    }
    return true
};