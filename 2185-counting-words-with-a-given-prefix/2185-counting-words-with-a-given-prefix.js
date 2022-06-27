/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

class TrieNode {
    constructor() {
        this.children = new Array(26)
        this.count = 0
        this.children.fill(null)
        this.isend = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    
    insert(word) {
        let curr = this.root
        for(let ch of word) {
            let index = ch.charCodeAt() - 'a'.charCodeAt()
            if(curr[index] == null) {
                curr[index] = new TrieNode()
            }
            curr[index].count++
            curr = curr[index]
        }
        curr.isend = true
    }
    
    search(prefix) {
        let curr = this.root
        for(let ch of prefix) {
            let index = ch.charCodeAt() - 'a'.charCodeAt()
            if(curr[index] == null) {
                return 0
            }
            curr = curr[index]
        }
        return curr.count
    }
 }
var prefixCount = function(words, pref) {
    
    let trie = new Trie()
    for(let word of words) {
        trie.insert(word)
    }
    return trie.search(pref)
};