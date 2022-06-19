class TrieNode {
    constructor() {
        this.children = new Array(26)
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
            if(curr.children[index] == null) {
                curr.children[index] = new TrieNode()
            }
            curr = curr.children[index] 
        }
        curr.isend = true
    }
    
    dfs(word, curr, words) {
        if(curr == null) {
            return 
        }
        if(curr.isend == true) {
            words.push(word)
        }
        for(let i = 0; i < 26; i++) {
            if(curr.children[i] != null) {
                let ch = String.fromCharCode(i+97)
                this.dfs(word+ch, curr.children[i], words)
            }
        }
    }
    
    search(prefix) {
        let curr = this.root
        for(let ch of prefix) {
            if(!curr) {
                break
            }
            let index = ch.charCodeAt() - 'a'.charCodeAt()
            curr = curr.children[index] 
        }
        
        let words = []
        this.dfs(prefix, curr, words)
        return words
    }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    
    let answer = []
    let trie = new Trie()
    for(let p of products) {
        trie.insert(p)
    }
    let prefix = ""
    for(let ch of searchWord) {
        prefix = prefix + ch
        let words = trie.search(prefix)
        words.sort(function(a,b) {
            return a.localeCompare(b)
        })
        //console.log(words)
        let top3 = []
        for(let i = 0; i < Math.min(words.length, 3); i++) {
            top3.push(words[i])
        }
        answer.push(top3)
    }
    return answer
    
};