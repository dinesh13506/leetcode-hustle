
class Node {
    constructor() {
        this.child = new Map()
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
    insert(word) {
        let curr = this.root
        //console.log(curr)
        for(let i = 0; i < word.length; i++) {
            let ch = word[i]
            let child = curr.child
            if(child.get(ch) == undefined) {
                child.set(ch, new Node())
            }
            curr = child.get(ch)
        }
        curr.isEnd = true
    }
    
    search(word,curr) {
        for(let i = 0; i < word.length; i++) {
            let ch = word[i]
            let child = curr.child
            if(child.get(ch) == undefined) {
                if(ch == '.') {
                    for(let x of child.keys()) {
                        if(this.search(word.substring(i+1),child.get(x))) {
                            return true
                        }
                    }
                }
                return false
            } else {
                curr = child.get(ch)
            }
        }
        return curr.isEnd
    }
}
var WordDictionary = function() {
    this.trie = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.insert(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.search(word,this.trie.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */