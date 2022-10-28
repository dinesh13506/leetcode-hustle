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
    public List<List<Integer>> result;
    
    public void getLevelOrder(TreeNode root) {
        LinkedList<TreeNode> queue = new LinkedList<TreeNode>();
        queue.addLast(root);
        while(queue.size() > 0) {
            ArrayList<Integer> level = new ArrayList<Integer>();
            int i = 0, size = queue.size();
            while(i < size) {
                TreeNode node = queue.pollFirst();
                level.add(node.val);
                if(node.left != null) {
                    queue.addLast(node.left);
                }
                if(node.right != null) {
                    queue.addLast(node.right);
                }
                i++;
            }
            result.add(level);
        }
    }
    public List<List<Integer>> levelOrder(TreeNode root) {
        result = new ArrayList<List<Integer>>();
        if(root == null) {
            return result;
        }
        
        getLevelOrder(root);
        return result;
    }
}