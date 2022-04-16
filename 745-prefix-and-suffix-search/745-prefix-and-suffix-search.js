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
        if(curr.isEnd) {
            words.push(prefix)
        }
        for(let i = 0; i < 26; i++) {
            let ch = String.fromCharCode(i + 97)
            let index = this.getIndex(ch)
            if(curr.children[index] != null) {
                this.dfs(curr.children[index],prefix+ch,words)
            }
        }
    }
    
    findWordsStartingWith(prefix) {
        let curr = this.root
        let words = []
        for(let ch of prefix) {
            let index = this.getIndex(ch)
            if(curr.children[index] == null) {
                return words
            }
            curr = curr.children[index]
        }
        this.dfs(curr,prefix,words)
        return words
    }
}


/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    
    let reverse = function(s) {
        let i = 0, j = s.length - 1
        while(i < j) {
            let t = s[i]
            s[i] = s[j]
            s[j] = t
            i++
            j--
        }
        return s.join('')
    }
    this.prefixTrie = new Trie()
    for(let word of words) {
        this.prefixTrie.insert(word)
    }
    this.suffixTrie = new Trie()
    for(let word of words) {
        word = reverse(word.split(''))
        this.suffixTrie.insert(word)
    }
    //index map
    this.indexMap = new Map()
    for(let i = 0; i < words.length; i++) {
        this.indexMap.set(words[i],i)
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    let reverse = function(s) {
        let i = 0, j = s.length - 1
        while(i < j) {
            let t = s[i]
            s[i] = s[j]
            s[j] = t
            i++
            j--
        }
        return s.join('')
    }
    suffix = reverse(suffix.split(''))
    let pwords = this.prefixTrie.findWordsStartingWith(prefix)
    let swords = this.suffixTrie.findWordsStartingWith(suffix)
    let set = new Set(), common = []
    for(let pword of pwords) {
        set.add(pword)
    }
    for(let sword of swords) {
        sword = reverse(sword.split(''))
        if(set.has(sword)) {
            common.push(sword)
        }
    }
    //console.log(pwords,swords,common)
    if(common.length <= 0 ) {
        return -1
    }
    let ans = 0
    for(let w of common) {
        ans = Math.max(ans,this.indexMap.get(w))
    }
    //console.log(ans)
    return ans
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */