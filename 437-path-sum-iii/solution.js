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
 * @return {number}
 */
 let count = 0
 var pathSum = function(root, targetSum) {
     count = 0
     let preorder = []
     preorder_traversal(root,preorder)
     for( let i=0; i<preorder.length;i++) {
         helper(preorder[i],targetSum)
     }
     return count
 };
 
 let preorder_traversal = function(root,preorder) {
     if(root) {
         preorder.push(root)
         preorder_traversal(root.left,preorder)
         preorder_traversal(root.right,preorder)
     }
 }
 
 let helper = function(root,remainingsum) {
     if(root == null) {
         return 
     }
     
     if(root.val == remainingsum){
         count++
     }
     
     helper(root.left,remainingsum-root.val)
     helper(root.right,remainingsum-root.val)
 }