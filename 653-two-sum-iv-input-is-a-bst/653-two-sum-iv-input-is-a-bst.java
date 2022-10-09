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
    public void inorder(TreeNode node, ArrayList<Integer>list) {
        if(node != null) {
            inorder(node.left, list);
            list.add(node.val);
            inorder(node.right, list);
        }
    }
    public boolean findTarget(TreeNode root, int k) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        inorder(root, list);
        Integer n = list.size();
        Integer p1 = 0, p2 = n-1;
        while(p1 < p2) {
            Integer sum = list.get(p1) + list.get(p2);
            if(sum == k) {
                return true;
            } else if(sum < k) {
                p1++;
            } else {
                p2--;
            }
        }
        return false;
        
    }
    
}