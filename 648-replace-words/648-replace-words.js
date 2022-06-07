/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

class Node {
    constructor() {
        this.children = new Array(26)
        this.isend = false
        this.children.fill(null)
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
}
var replaceWords = function(dictionary, sentence) {
    let trie = new Trie()
    for(let word of dictionary) {
        let curr = trie.root
        for(let ch of word) {
            let code = ch.charCodeAt() - 'a'.charCodeAt()
            if(curr.children[code]) {
                curr = curr.children[code]
            } else {
                curr.children[code] = new Node()
                curr = curr.children[code]
            }
        }
        curr.isend = true
    }
    
    let words = sentence.split(' ')
    for(let i = 0; i < words.length; i++) {
        let curr = trie.root
        let prefix = ""
        for(let ch of words[i]) {
            prefix = prefix + ch
            let code = ch.charCodeAt() - 'a'.charCodeAt()
            if(curr.children[code]) {
                curr = curr.children[code]
                if(curr.isend) {
                    words[i] = prefix
                    break
                }
            } else {
                break
            }
        }
    }
    return words.join(' ')
};