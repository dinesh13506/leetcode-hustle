/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    
    let product = 0
    let n = words.length
    let bitMap = new Map()
    for(let word of words) {
        //avoid duplicates
        if(bitMap.has(word)) {
            continue
        }
        bitMap.set(word, 0)
        let value = 0
        for(let ch of word) {
            let ascii = ch.charCodeAt()
            value = value | 1 << (ascii - 97)
        }
        bitMap.set(word, value)
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            //abc => 111 , d => 1000
            let bitset_i = bitMap.get(words[i])
            let bitset_j = bitMap.get(words[j])
            if( (bitset_i & bitset_j) == 0) {
                product = Math.max(product, words[i].length * words[j].length)
            }
        }
    }
    return product
    
};