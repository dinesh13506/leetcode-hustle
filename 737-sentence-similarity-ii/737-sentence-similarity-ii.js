/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
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
    
    let components = [], visited = new Set()
    
    let dfs = (str, component) => {
        if(visited.has(str)) {
            return
        }
        component.push(str)
        visited.add(str)
        for(let nbr of map.get(str)) {
            dfs(nbr, component)
        }
    }
    
    for(let str of map.keys()) {
        if(visited.has(str) == false) {
            let component = []
            dfs(str, component)
            components.push(component)
        }
    }
    //console.log(components)
    
    
    
    if(sentence1.length != sentence2.length) return false
    const n = sentence1.length
    
    for(let i = 0; i < n; i++) {
        let w1 = sentence1[i], w2 = sentence2[i]
        
        let found = false
        if(w1 == w2) {
            continue
        }
        for(let component of components) {
            if(component.includes(w1) && component.includes(w2)) {
                found = true
                continue
            }
            if(component.includes(w1) && !component.includes(w2)) {
               return false
            }
            if(!component.includes(w1) && component.includes(w2)) {
               return false
            }
            
        }
        if(found == false) {
            return false
        }
    }
    return true
};