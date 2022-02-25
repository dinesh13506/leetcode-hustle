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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

 let depthx = -1
 let depthy = -1
 let parentx = null
 let parenty = null
 var isCousins = function(root, x, y) {
     depthx = -1
     depthy = -1
     parentx = null
     parenty = null
     depth(root,x,y,0,null)
     if(depthx==depthy && parentx != parenty) {
         return true
     }
     return false
     
 };
 
 
 let depth = function( root,x,y, d,parent) {
     if(root == null) {
         return 0
     }
     if(root.val == x) {
         depthx = d
         parentx = parent
     }
     if(root.val == y) {
         depthy = d
         parenty = parent
     }
     depth(root.left,x,y,d + 1,root)
     depth(root.right,x,y,d + 1,root)
 }