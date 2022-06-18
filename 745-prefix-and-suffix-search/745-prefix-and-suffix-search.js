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
    
    dfs(curr, prefix,words) {
        if(curr.isend) {
            words.push(prefix)
        }
        for(let i = 0; i < 26; i++) {
            if(curr.children[i] != null) {
                let ch = String.fromCharCode(i + 97)
                this.dfs(curr.children[i], prefix + ch, words)
            }
        }
    }
    
    getStartsWith(prefix, words) {
        let curr = this.root
        for(let ch of prefix) {
            let index = ch.charCodeAt() - 'a'.charCodeAt()
            curr = curr.children[index]
            if(curr == null) {
                return words
            }
        }
        this.dfs(curr, prefix, words)
    }
}


/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    
    this.map = new Map()
    for(let i = 0; i < words.length; i++) {
        this.map.set(words[i],i)
    }
    this.prefixTree = new Trie()
    for(let word of words) {
        this.prefixTree.insert(word)
    }
    
    this.suffixTree = new Trie()
    for(let word of words) {
        let arr = word.split('').reverse().join('')
        this.suffixTree.insert(arr)
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    
    let word1 = []
    this.prefixTree.getStartsWith(prefix,word1)
    let word2 = []
    suffix = suffix.split('').reverse().join('')
    this.suffixTree.getStartsWith(suffix,word2)
    
    //console.log(word1, word2, this.map)
    let common = [], set = new Set()
    for(let word of word1) {
        set.add(word)
    }
    for(let word of word2) {
        let arr = word.split('').reverse().join('')
        if(set.has(arr) == true) {
            common.push(arr)
        }
    }
    //console.log(common)
    let ans = -1
    for(let w of common) {
        ans = Math.max(ans, this.map.get(w))
    }
    return ans
    
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */