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
 let ans = 0
 var goodNodes = function(root) {
     
     ans = 0
     let max = Number.MIN_SAFE_INTEGER
     preorder(root,max)
     return ans
 };
 
 
 
 let preorder = function(root,max) {
     if(root) {
         //console.log(root.val,max)
         if(root.val >= max) {
            ans++ 
         }
         preorder(root.left,Math.max(max,root.val))
         preorder(root.right,Math.max(max,root.val))
     }
 }