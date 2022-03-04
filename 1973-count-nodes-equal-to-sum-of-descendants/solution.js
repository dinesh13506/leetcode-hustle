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
 let count = 0
 var equalToDescendants = function(root) {
     count = 0
     postorder(root)
     return count
 };
 
 
 
 let postorder = function(root) {
     if(root) {
         let left_sum = postorder(root.left)
         let right_sum = postorder(root.right)
         let root_val = root.val
         if(root_val == (left_sum + right_sum)) {
             count++
         }
         //console.log(left_sum,right_sum,root_val)
         return root_val + left_sum + right_sum
     } else {
         return 0
     }
 }