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
 * @return {number}
 */
 let sum = 0
 const left_dir = 0
 const right_dir = 1
 var sumOfLeftLeaves = function(root) {
     sum = 0
     preorder(root, - 1)
     return sum
 };
 
 
 let preorder = function(root,dir) {
     if(root) {
         if(!root.left && !root.right && dir==left_dir) {
             sum += root.val
         }
         preorder(root.left,left_dir)
         preorder(root.right,right_dir)
     }
 }