/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        
        if(root == null) {
            return root;
        }
        
        Queue<Node> queue = new LinkedList<Node>();
        queue.add(root);
        while(queue.isEmpty() == false) {
            LinkedList<Node> temp = new LinkedList<Node>();
            Node tail = null;
            while(queue.isEmpty() == false) {
                Node node = queue.poll();
                if(tail == null) {
                    tail = node;
                } else {
                    tail.next = node;
                    tail = tail.next;
                }
                if(node.left != null) {
                    temp.add(node.left);
                    
                }
                if(node.right != null) {
                    temp.add(node.right);
                    
                }
            }
            if(tail != null) {
                tail.next = null;
            }
            queue = temp;
        }
        return root;
    }
}