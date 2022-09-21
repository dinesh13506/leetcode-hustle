/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
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
    insert(w) {
        let parent = this.root
        for(let ch of w) {
            let idx = ch.charCodeAt() - 'a'.charCodeAt()
            if(parent.children[idx] == null) {
                parent.children[idx] = new TrieNode()
            }
            parent = parent.children[idx]
        }
        parent.isend = true
        
    }
}
var exist = function(board, word) {
    
    let trie = new Trie()
    trie.insert(word)
    
    const m = board.length, n = board[0].length
    let ans = []
    let dfs = (i,j,curr) => {
        let letter = board[i][j]
        let idx = letter.charCodeAt() - 'a'.charCodeAt()
        curr = curr.children[idx]
        if(curr.isend) {
            ans.push(true)
            return
        }
        board[i][j] = '#'
        let dir = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1]
        ]
        for(let d of dir) {
            let x = i + d[0]
            let y = j + d[1]
            if(x < 0 || y < 0 || x >= m || y >= n) continue
            let letter = board[x][y]
            let idx = letter.charCodeAt() - 'a'.charCodeAt()
            if(curr.children[idx]) {
                dfs(x,y,curr)
            }
        }
        board[i][j] = letter
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let letter = board[i][j]
            let idx = letter.charCodeAt() - 'a'.charCodeAt()
            if(trie.root.children[idx]) {
                dfs(i,j,trie.root)
            }
        }
    }
    
    return ans.length >=1 ? true : false
};