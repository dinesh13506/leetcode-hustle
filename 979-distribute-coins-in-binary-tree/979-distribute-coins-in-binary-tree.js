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
var distributeCoins = function(root) {
    
    let moves = 0
    let postorder = (node) => {
        if(node) {
            let left = postorder(node.left), right = postorder(node.right)
            
            moves += Math.abs(left) + Math.abs(right)
            return node.val - 1 + left + right
            
        } else {
            return 0
        }
    }
    
    postorder(root)
    return moves
};