class TrieNode {
    public boolean isEnd;
    public TrieNode[] children;
    
    public TrieNode() {
        this.isEnd = false;
        this.children = new TrieNode[26];
        Arrays.fill(this.children, null);
    }
}

class Trie {
    public TrieNode root;
    
    public Trie() {
        this.root = new TrieNode();
    }
    
    public void insert(String w) {
        char[] warr = w.toCharArray();
        TrieNode p = root;
        for(int i = 0; i < warr.length; i++) {
            int idx = warr[i] - 'a';
            if(p.children[idx] == null) {
                p.children[idx] = new TrieNode();
            }
            p = p.children[idx];
        }
        p.isEnd = true;
    }
    
    public boolean match(char[] warr, int i, int edits, TrieNode p) {
        if(i >= warr.length && edits >= 0) {
            return true;
        }
       
        int idx = warr[i] - 'a';
        //System.out.println(edits + " " + warr[i] + " " + p.children[idx]);
        if(p.children[idx] != null && match(warr, i + 1, edits, p.children[idx])) {
            return true;
        }
        if(edits <= 0) {
            return false;
        }
        boolean ans = false;
        for(int j = 0; j < 26; j++) {
            if(p.children[j] != null) {
                ans = ans | match(warr, i + 1, edits - 1, p.children[j]);
            }
        }
        return ans;
    }
}

class Solution {
    public List<String> twoEditWords(String[] queries, String[] dictionary) {
        Trie trie = new Trie();
        for(String w : dictionary) {
            trie.insert(w);
        }
        List<String> ans = new ArrayList();
        for(String w : queries) {
            char[] warr = w.toCharArray();
            if(trie.match(warr, 0, 2, trie.root)) {
                ans.add(w);
            }
        }
        return ans;
    }
}