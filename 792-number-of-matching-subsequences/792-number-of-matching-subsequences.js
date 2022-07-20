/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

class Node {
    constructor(index, word) {
        this.index = index
        this.word = word
    }
}
var numMatchingSubseq = function(s, words) {
    
    let count = 0
    let buckets = new Array(26)
    for(let i = 0; i < 26; i++) {
        buckets[i] = []
    }
    
    for(let w of words) {
        buckets[w[0].charCodeAt() - 'a'.charCodeAt()].push(new Node(0,w))
    }
    
    for(let ch of s) {
        let list = buckets[ch.charCodeAt() - 'a'.charCodeAt()]
        buckets[ch.charCodeAt() - 'a'.charCodeAt()] = []
        for(let node of list) {
            node.index++
            if(node.index == node.word.length) {
                count++
            } else {
                buckets[node.word[node.index].charCodeAt() - 'a'.charCodeAt()].push(node)
            }
        }
    }
    return count
    
};