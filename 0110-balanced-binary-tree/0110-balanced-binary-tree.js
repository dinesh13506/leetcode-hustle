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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
   let check = (node) => {
       if(node == null) {
           return 0;
       } else {
           let lh = check(node.left);
           let rh = check(node.right);
           //console.log(node.val, lh, rh);
           if(Math.abs(lh - rh) <= 1) {
               return 1 + Math.max(lh, rh);
           } else {
               return Infinity;
           }
           
       }
   }
   
   return check(root) == Infinity ? false : true;
};