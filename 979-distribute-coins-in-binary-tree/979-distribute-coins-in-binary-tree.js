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
    
    let ops = 0
    let postorder = (node) => {
        if(node) {
            let lhs = postorder(node.left)
            let rhs = postorder(node.right)
            ops = ops + Math.abs(lhs) + Math.abs(rhs)
            return node.val - 1 + lhs + rhs
            
        } else {
            return 0
        }
    }
    postorder(root)
    return ops
};