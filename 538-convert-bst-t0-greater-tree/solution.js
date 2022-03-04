/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 let sum  = 0 
 var convertBST = function(root) {
     sum = 0
     if(root == null) {
         return root
     }
     preorderDFS(root)
     return root
 };
 
 
 let preorderDFS = function(root) {
     if(root == null) {
         return 0
     }
     preorderDFS(root.right)
     root.val = sum + root.val
     sum = root.val
     preorderDFS(root.left)
    
 }