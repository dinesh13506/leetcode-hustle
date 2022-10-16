/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class BSTIterator {

    public int pointer = -1;
    public ArrayList<TreeNode> nodes;
    public void inorder(TreeNode node) {
        if(node != null) {
            inorder(node.left);
            nodes.add(node);
            inorder(node.right);
        }
    }
    public BSTIterator(TreeNode root) {
        nodes = new ArrayList<TreeNode>();
        inorder(root);
    }
    
    public int next() {
        return nodes.get(++pointer).val;
    }
    
    public boolean hasNext() {
        return (pointer + 1) < nodes.size() ? true : false;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */