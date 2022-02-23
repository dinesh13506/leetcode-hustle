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
 * @param {number} targetSum
 * @return {boolean}
 */
 let sum = 0
 var hasPathSum = function(root, targetSum) {
     sum = 0
     return pathsum(root,targetSum)
 };
 
 
 let pathsum = function(root,targetSum) {
     
     if(root == null) {
         return false
     }
     if(targetSum == root.val && root.left == null && root.right == null) {
         return true
     }
     
     sum = sum + root.val
     
     let lh = pathsum(root.left, targetSum-root.val)
     if(lh) {
         return true
     }
     let rh =  pathsum(root.right, targetSum-root.val)
     if(rh) {
         return true
     }
     
     if(lh == false && rh == false ) {
         sum = sum - root.val
     }
     
     return lh || rh
     
 }