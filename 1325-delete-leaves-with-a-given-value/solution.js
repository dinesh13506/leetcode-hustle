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
 * @param {number} target
 * @return {TreeNode}
 */
 const root_dir = -1
 const left_dir = 0
 const right_dir = 1
 var removeLeafNodes = function(root, target) {
     return preorder(root,target,null,-1)
 };
 
 
 
 let preorder = function(root, target,parent,dir) {
     if(root) {
         if(!root.left && !root.right && root.val == target) {
             //console.log(root.val,parent ? parent.val : null,dir)
             if(dir == left_dir && parent) {
                 parent.left = null
             }
             
             if(dir == right_dir && parent) {
                 parent.right = null
             }
         }
         
         preorder(root.left,target,root,left_dir)
         preorder(root.right,target,root,right_dir)
         
         if(!root.left && !root.right && root.val == target) {
             //console.log(root.val,parent ? parent.val : null,dir)
             if(dir == left_dir && parent) {
                 parent.left = null
             }
             
             if(dir == right_dir && parent) {
                 parent.right = null
             }
             
             if(!parent) {
                 return null
             }
         }
         return root
     }
 }