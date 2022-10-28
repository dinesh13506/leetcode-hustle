/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public ArrayList<Integer> result;
    
    public void getPreorder(Node node) {
       if(node != null) {
            result.add(node.val);
            for(int i = 0; i < node.children.size(); i++) {
                getPreorder(node.children.get(i));
            }
        } 
    }
    public List<Integer> preorder(Node root) {
        result = new ArrayList<Integer>();
        getPreorder(root);
        return result;
    }
}