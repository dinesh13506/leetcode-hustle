/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    
    let map = new Map()
    for(let pair of similarPairs) {
        if(map.has(pair[0])) {
            map.get(pair[0]).add(pair[1])
        } else {
            map.set(pair[0], new Set())
            map.get(pair[0]).add(pair[1])
        }
        if(map.has(pair[1])) {
            map.get(pair[1]).add(pair[0])
        } else {
            map.set(pair[1], new Set())
            map.get(pair[1]).add(pair[0])
        }
        
    }
    // console.log(sentence1)
    // console.log(sentence2)
    // console.log(map)
    
    if(sentence1.length != sentence2.length) return false
    
    for(let i = 0; i < sentence1.length; i++) {
        if(sentence1[i] == sentence2[i]) {
            continue
        }
        else if(map.get(sentence1[i]) && map.get(sentence1[i]).has(sentence2[i])) {
            continue
        }
        else if(map.get(sentence2[i]) && map.get(sentence2[i]).has(sentence1[i])) {
            continue
        }
        // else if(map.get(sentence1[i]) == map.get(sentence2[i])) {
        //     continue
        // }
        return false
        
    }
    return true
};