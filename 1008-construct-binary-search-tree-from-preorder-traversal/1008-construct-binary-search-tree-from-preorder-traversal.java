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
    public int i = 0;
    public TreeNode build(int[] preorder, int min,int max) {
        if(i >= preorder.length) return null;
        int val = preorder[i];
        if(val < min || val > max) return null;
        i++;
        TreeNode node = new TreeNode(val);
        node.left = build(preorder, min, val);
        node.right = build(preorder, val, max);
        return node;
    }
    public TreeNode bstFromPreorder(int[] preorder) {
        return build(preorder, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
}