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
    public ArrayList<Integer> list;
    public boolean isLeaf(TreeNode node) {
        return node.left == null && node.right == null;
    }
    public void leftView(TreeNode node) {
        if(node != null) {
            if(isLeaf(node)) {
                return;
            }
            list.add(node.val);
            if(node.left != null) {
                leftView(node.left);
            } else if(node.right != null) {
                leftView(node.right);
            }
        }
    }
    public void rightView(TreeNode node) {
        if(node != null) {
            if(isLeaf(node)) {
                return;
            }
            if(node.right != null) {
                rightView(node.right);
            }
            else if(node.left != null) {
                rightView(node.left);
            }
            list.add(node.val);
        }
    }
    
    public void LeafNodes(TreeNode node, TreeNode root) {
        if(node != null) {
            if(isLeaf(node) && node != root) {
                list.add(node.val);
            }
            LeafNodes(node.left,root);
            LeafNodes(node.right,root);
        }
    }
    
    public List<Integer> boundaryOfBinaryTree(TreeNode root) {
        list = new ArrayList<Integer>();
        if(root != null) {
            list.add(root.val);
            leftView(root.left);
            LeafNodes(root, root);
            rightView(root.right);
        }
        
        return list;
    }
}