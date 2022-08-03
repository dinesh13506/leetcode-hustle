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
var maxPathSum = function(root) {
    
    let ans = -Infinity
    let postorder = (node) => {
        if(node) {
            let lvalue = postorder(node.left)
            let rvalue = postorder(node.right)
            let lmax = Math.max(lvalue, 0)
            let rmax = Math.max(rvalue, 0)
            ans = Math.max( ans, node.val + lmax + rmax)
            return node.val + Math.max(lmax, rmax)
        } else {
            return 0
        }
    }
    postorder(root)
    return ans
};