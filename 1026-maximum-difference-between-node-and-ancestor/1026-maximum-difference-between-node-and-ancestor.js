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
var maxAncestorDiff = function(root) {
    
    let dfsUtil = function(node,max,min) {
        if(node == null) {
            return max - min
        }
        max = Math.max(node.val,max)
        min = Math.min(node.val,min)
        return Math.max(dfsUtil(node.left,max,min),dfsUtil(node.right,max,min))
    }
    return dfsUtil(root,root.val,root.val)
};