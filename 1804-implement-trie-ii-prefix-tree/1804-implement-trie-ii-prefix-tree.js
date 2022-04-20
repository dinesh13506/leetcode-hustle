var TrieNode = function() {
    this.children = new Array(26)
    this.children.fill(null)
    this.end = 0
    this.count = 0
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
        if(curr.children[i] == null) {
            curr.children[i] = new TrieNode()
        }
        curr.children[i].count++
        curr = curr.children[i]
    }
    curr.end++
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    let curr = this.root
    for(let ch of word) {
        let i = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[i] == null) {
            return 0
        }
        curr = curr.children[i]
    }
    return curr.end
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    let curr = this.root
    for(let ch of prefix) {
        let i = ch.charCodeAt() - 'a'.charCodeAt()
        if(curr.children[i] == null) {
            return 0
        }
        curr = curr.children[i]
    }
    return curr.count
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    let curr = this.root
    for(let ch of word) {
        let i = ch.charCodeAt() - 'a'.charCodeAt()
        curr = curr.children[i]
        curr.count--
    }
    curr.end--
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */