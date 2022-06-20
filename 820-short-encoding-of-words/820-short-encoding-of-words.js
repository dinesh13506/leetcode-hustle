class TrieNode {
    constructor() {
        this.isend = true
        this.children = new Array(26)
        this.children.fill(null)
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
            if(curr.children[index] == null) {
                curr.children[index] = new TrieNode()
            }
            curr = curr.children[index]
        }
        curr.isend = true
    }
    
    isLeaf(curr) {
        for(let i = 0; i < 26; i++) {
            if(curr.children[i]) {
                return false
            }
        }
        return true
    }
    
    dfs(word, words, curr) {
        
        if(curr.isend && this.isLeaf(curr)) {
            words.push(word)
        }
        
        for(let i = 0; i < 26; i++) {
            if(curr.children[i]) {
                let ch = String.fromCharCode(i + 97)
                this.dfs(word + ch, words,curr.children[i])
            }
        }
    }
}


/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    
    
    
    let suffixTree = new Trie()
    for(let w of words) {
        w = w.split('').reverse().join('')
        suffixTree.insert(w)
    }
    
    let ans1 = []
    suffixTree.dfs('',ans1,  suffixTree.root)
    console.log(ans1)
    
    let s1 = ans1.join('#')
    console.log(s1)
    
    
    return (s1.length) + 1
};