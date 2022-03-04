/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 let ans = null
 let prev = null
 var inorderSuccessor = function(root, p) {
     ans = null
     prev = null
     inorder(root,p)
     return ans
 };
 
 
 let inorder = function(root,p) {
     if(root == null) {
         return null
     }
     inorder(root.right,p)
     if(root.val == p.val) {
         ans = prev
         return
     }
     prev = root
     inorder(root.left,p)
 }