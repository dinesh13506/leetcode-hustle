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
    public ArrayList<Integer> result;
    public HashMap<TreeNode, TreeNode> parentMap;
    
    public void rightSideViewRec(TreeNode root) {
        if(root != null) {
            LinkedList<TreeNode> ll = new LinkedList<TreeNode>();
            ll.add(root);
            while(ll.size() > 0) {
                LinkedList<TreeNode> temp = new LinkedList<TreeNode>();
                while(ll.size() > 0) {
                    TreeNode node = ll.pollFirst();
                    if(ll.size() == 0) {
                        result.add(node.val);
                    }
                    if(node.left != null) {
                        temp.add(node.left);
                    }
                    if(node.right != null) {
                        temp.add(node.right);
                    }
                }
                ll = temp;
            }
        }
    }
    public List<Integer> rightSideView(TreeNode root) {
        result = new ArrayList<Integer>();
        rightSideViewRec(root);
        return result;
    }
}