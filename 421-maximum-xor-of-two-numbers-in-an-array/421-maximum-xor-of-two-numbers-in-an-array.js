/**
 * @param {number[]} nums
 * @return {number}
 */

class TrieNode {
    constructor() {
        this.isEnd = false
        this.children = new Array(2)
        this.children.fill(null)
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    
}
var findMaximumXOR = function(nums) {
    
    let trie = new Trie()
    
    //build trie
    for(let num of nums) {
        let curr = trie.root
        for(let i = 31; i>=0; i--) {
            let bit = ( num & (1 << i) ) > 0 ? 1 : 0
            if(curr.children[bit] != null) {
                curr = curr.children[bit]
            } else {
                curr.children[bit] = new TrieNode()
                curr = curr.children[bit]
            }
        }
        curr.isEnd = true
    }
    
    //find xor
    let max_xor = 0
    for(let num of nums) {
        let val = 0
        let curr = trie.root
        for(let i = 31; i>=0; i--) {
            let bit = (num & (1 << i)) > 0 ? 1 : 0
            if(bit == 0) {
                if(curr.children[1] != null) {
                    val = val * 2 + 1
                    curr = curr.children[1]
                } else {
                    val = val * 2 + 0
                    curr = curr.children[0]
                }
            } else {
                if(curr.children[0] != null) {
                    val = val * 2 + 1
                    curr = curr.children[0]
                } else {
                    val = val * 2 + 0
                    curr = curr.children[1]
                }
            }
            
            max_xor = Math.max(max_xor, val)
        }
    }
    return max_xor
};