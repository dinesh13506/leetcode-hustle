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

    public Stack<TreeNode> stack;
    
    public void inorder(TreeNode node) {
        while(node != null) {
            stack.push(node);
            node = node.left;
        }
    }
    public BSTIterator(TreeNode root) {
        stack = new Stack<TreeNode>();
        inorder(root);
    }
    
    public int next() {
        TreeNode top = stack.pop();
        if(top.right != null) {
            inorder(top.right);
        }
        return top.val;
        
    }
    
    public boolean hasNext() {
        return stack.size() > 0 ? true : false;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */