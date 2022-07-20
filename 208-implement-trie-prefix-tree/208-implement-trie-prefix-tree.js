var TrieNode = function() {
    this.children = new Array(26)
    this.children.fill(null)
    this.isend = false
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root
    for(let ch of word) {
        let i = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[i] != null) {
            curr = curr.children[i]
        } else {
            curr.children[i] = new TrieNode()
            curr = curr.children[i]
        }
    }
    curr.isend = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root
    for(let ch of word) {
        let i = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[i]) {
            curr = curr.children[i]
        } else {
            return false
        }
    }
    
    return curr.isend
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root
    for(let ch of prefix) {
        let i = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[i]) {
            curr = curr.children[i]
        } else {
            return false
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */