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
    let postorder = (node,max_left, max_right) => {
        if(node) {
            let lvalue = postorder(node.left, max_left, max_right)
            let rvalue = postorder(node.right, max_left, max_right)
            let lmax = Math.max(lvalue, max_left)
            let rmax = Math.max(rvalue, max_right)
            ans = Math.max( ans, node.val + lmax + rmax)
            return node.val + Math.max(lmax, rmax)
        } else {
            return 0
        }
    }
    postorder(root, 0, 0)
    return ans
};