/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
    constructor() {
        this.word = null;
        this.children = new Array(26);
        this.children.fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(w) {
        let p = this.root;
        for(let ch of w) {
            let idx = ch.charCodeAt() - 'a'.charCodeAt();
            if(p.children[idx] == null) {
                p.children[idx] =  new TrieNode();
            }
            p =  p.children[idx];
        }
        p.word = w;
    }
    isEmpty(node) {
        for(let i = 0; i < 26; i++) {
            if(node.children[i] != null) {
                return false;
            }
        }
        return true;
    }
}
var findWords = function(board, words) {
    const ans = [];
    const m = board.length;
    const n = board[0].length;
    let dirs = [
        [0,1],
        [0,-1],
        [1,0],
        [-1, 0]
    ];
    
    //step 1
    let trie = new Trie();
    for(let w of words) {
        trie.insert(w);
    }
    
    let dfs = (i, j , node) => {
        
        let ch = board[i][j];
        let idx = ch.charCodeAt() - 'a'.charCodeAt();
        let currNode = node.children[idx];
        //console.log(currNode.word != null)
        if(currNode.word != null) {
            ans.push(currNode.word);
            currNode.word = null;
        }
        let value =  board[i][j];
        board[i][j] = '#';
        for(let d of dirs) {
            let x = i + d[0];
            let y = j + d[1];
            if(x < 0 || y < 0 || x >= m || y >= n) {
                continue;
            }
            let idx = board[x][y].charCodeAt() - 'a'.charCodeAt();
            if(currNode.children[idx] != null) {
                dfs(x, y, currNode);
            }
        }
        board[i][j] = value;
        if(trie.isEmpty(currNode)) {
            node.children[idx] = null;
        }
    }
    
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            let idx = board[r][c].charCodeAt() - 'a'.charCodeAt();
            if(trie.root.children[idx] != null) {
                dfs(r, c, trie.root);
            }
        }
    }
    
    return ans;
    
    
};