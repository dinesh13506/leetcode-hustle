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
    public TreeNode trim(TreeNode node, int low, int high) {
        if(node == null) {
            return null;
        }
        TreeNode leftPart = trim(node.left, low, high);
        TreeNode rightPart = trim(node.right, low, high);
        if(node.val < low) {
            return rightPart;
        }
        else if(node.val > high) {
            return leftPart;
        }
        else {
            node.left = leftPart;
            node.right = rightPart;
            return node;
        }
    }
    public TreeNode trimBST(TreeNode root, int low, int high) {
        return trim(root, low, high);
    }
}