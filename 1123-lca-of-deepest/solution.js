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
 let map = {}
 var lcaDeepestLeaves = function(root) {
     
     map = {}
     if(root == null || (height(root.left) == height(root.right) ) ) {
         return root
     }
     let lh = height(root.left)
     let rh = height(root.right)
     return lcaDeepestLeaves( ( lh > rh  ? root.left : root.right) )
 };
 
 
 let height = function(root) {
     if(root == null) return 0
     if(map[root.val]) {
         return map[root.val]
     }
     let h =  1 + Math.max(height(root.left) , height(root.right))
     map[root.val] = h
     return h
 }