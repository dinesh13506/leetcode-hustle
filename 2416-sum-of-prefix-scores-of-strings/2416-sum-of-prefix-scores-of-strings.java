class Solution {
    public int[] sumPrefixScores(String[] a) {
        Trie trie = new Trie();
        int[] res = new int[a.length];
        for (String s : a) trie.insert(s);
        int p = 0;
        for (String s : a) res[p++] = trie.query(s);
        return res;
    }

    class Trie {
        Trie[] next;
        int cnt;
        Trie() {
            next = new Trie[26];
            cnt = 0;
        }
        void insert(String s) {
            Trie cur = this;
            for (int i = 0; i < s.length(); i++) {
                int idx = s.charAt(i) - 'a';
                if (cur.next[idx] == null) cur.next[idx] = new Trie();
                cur = cur.next[idx];
                cur.cnt++;
            }
        }
        int query(String s) {
            Trie cur = this;
            int res = 0;
            for (int i = 0; i < s.length(); i++) {
                int idx = s.charAt(i) - 'a';
                cur = cur.next[idx];
                res += cur.cnt;
            }
            return res;
        }
    }
}