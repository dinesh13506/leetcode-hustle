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
    public PriorityQueue<Integer> pq;
    public void inorder(TreeNode node, int k) {
        if(node != null) {
            inorder(node.left, k);
            if(pq.peek() == null) {
                pq.add(node.val);
            } else if(pq.size() < k) {
                pq.add(node.val);
            }
            else if(pq.size() >= k && pq.peek() > node.val) {
                pq.poll();
                pq.add(node.val);
            }
            inorder(node.right, k);
        }
    }
    public int kthSmallest(TreeNode root, int k) {
        pq = new PriorityQueue<Integer>((a,b) -> { return b - a;});
        inorder(root, k);
        return pq.peek();
    }
}