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
class Solution {
    public ArrayList<Integer> al;
    public void inorder(TreeNode node) {
        if(node != null) {
            inorder(node.left);
            al.add(node.val);
            inorder(node.right);
        }
    }
    public int kthSmallest(TreeNode root, int k) {
        al = new ArrayList<Integer>();
        inorder(root);
        return al.get(k-1);
    }
}