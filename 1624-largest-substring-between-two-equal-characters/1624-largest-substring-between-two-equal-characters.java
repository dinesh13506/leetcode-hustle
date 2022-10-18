class Node {
    public int first = -1;
    public int last = -1;
    public Node(int first, int last) {
        this.first = first;
        this.last = last;
    }
}

class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        Node[] list = new Node[26];
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            int idx = ch - 'a';
            if(list[idx] == null) {
                list[idx] = new Node(i,i);
            } else {
                Node node = list[idx];
                node.first = Math.min(i, node.first);
                node.last = Math.max(i, node.last);
            }
        }
        
        int ans = -1;
        for(int i = 0; i < 26; i++) {
            Node node = list[i];
            if(node != null) {
                ans = Math.max(ans, node.last - node.first + 1 - 2);
            }
        }
        return ans;
    }
}