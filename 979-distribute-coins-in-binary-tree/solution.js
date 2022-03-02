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
 let moves = 0
 var distributeCoins = function(root) {
     moves = 0
     postorder(root)
     return moves
 };
 
 
 let postorder = function(root) {
     if(root == null) {
         return 0
     }
     let L = postorder(root.left)
     let R = postorder(root.right)
     moves += Math.abs(L) + Math.abs(R)
     return root.val - 1 + L + R
 }