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
var deepestLeavesSum = function(root) {
    
    let depth = function(root) {
        if(root == null) {
            return 0
        }
        if(root.left == null && root.right == null) {
            return 0
        }
        return 1 + Math.max(depth(root.left), depth(root.right))
    }
    
    let maxdepth = depth(root)
    
    let sum = 0
    let preorder = function(root, depth) {
        if(root) {
            if(root.left == null && root.right == null && depth == maxdepth) {
                sum += root.val
            }
            preorder(root.left, depth+1)
            preorder(root.right, depth+1)
        }
    }
    preorder(root,0)
    return sum
};