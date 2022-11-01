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
    public int max = Integer.MAX_VALUE;
    public int check(TreeNode node) {
        if(node == null) {
            return 0;
        } else {
            int lh = check(node.left);
            int rh = check(node.right);
            if(lh == max || rh == max || Math.abs(lh - rh) > 1) {
                return max;
            } else {
                return 1  + Math.max(lh, rh);
            }
        }
    }
    
    public boolean isBalanced(TreeNode root) {
        return check(root) == max ? false : true;
    }
}