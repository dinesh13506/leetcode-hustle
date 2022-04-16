/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
class Node {
    constructor() {
        this.children = new Array(26)
        this.children.fill(null)
        this.isEnd = false
    }
}
class Trie {
    
    constructor() {
        this.root = new Node()
    }

    getIndex(ch) {
        return ch.charCodeAt() - 'a'.charCodeAt()
    }
    
    insert(word) {
        let curr = this.root
        for(let ch of word) {
            let index = this.getIndex(ch)
            if(curr.children[index] == null) {
                curr.children[index] = new Node()
            }
            curr = curr.children[index]
        }
        curr.isEnd = true
    }

    dfs(curr,prefix,words) {
        
        if(words.length == 3) {
            return words
        }
        if(curr.isEnd) {
            words.push(prefix)
        }
        
        for(let i = 0; i < 26; i++) {
            if(curr.children[i] != null) {
                let ch = String.fromCharCode(97 + i)
                this.dfs(curr.children[i], prefix + ch, words )
            }
        }
    }

    getWordsStartingWith(prefix) {
        let curr = this.root
        let words = []
        for(let ch of prefix) {
            let index = this.getIndex(ch)
            if(curr.children[index] == null) {
                return words
            }
            curr = curr.children[index]
        }
        this.dfs(curr,prefix, words)
        return words
    }
}
var suggestedProducts = function(products, searchWord) {
    let trie = new Trie()
    for(let product of products) {
        trie.insert(product)
    }
    let result = []
    let prefix = []
    for(let ch of searchWord) {
        prefix.push(ch)
        result.push(trie.getWordsStartingWith(prefix.join('')))
    }
    return result
    
};