/**
 * @param {string[]} words
 * @return {string}
 */
class Node {
    constructor() {
        this.children = new Array(26)
        this.children.fill(null)
        this.end = false
    }
}
class Trie {
    constructor() {
       this.root = new Node() 
    }
}
var longestWord = function(words) {
    let trie = new Trie()
    for(let word of words) {
        let curr = trie.root
        for(let ch of word) {
            let code = ch.charCodeAt() - 'a'.charCodeAt()
            if(curr.children[code]) {
                curr = curr.children[code]
            } else {
                curr.children[code] = new Node()
                curr = curr = curr.children[code]
            }
        }
        curr.end = true
    }
    
    words.sort(function(a,b) {
        if(a.length == b.length) {
            return a.localeCompare(b)
        }
        else if(a.length > b.length) {
            return -1
        }
        else {
            return 1
        }
    })
    for(let word of words) {
        let curr = trie.root
        let isvalid = true
        for(let ch of word) {
            let code = ch.charCodeAt() - 'a'.charCodeAt()
            curr = curr.children[code]
            if(curr.end == false) {
                isvalid = false
                break
            }
        }
        if(isvalid) {
            return word
        }
    }
    return ""
};