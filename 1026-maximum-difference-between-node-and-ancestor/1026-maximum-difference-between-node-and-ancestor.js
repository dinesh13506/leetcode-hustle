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
    
    let result = 0
    let dfsUtil = function(node,currMax,currMin) {
        if(node == null) {
            return
        }
        let temp = Math.max(Math.abs(currMax - node.val), Math.abs(currMin - node.val))
        result = Math.max(temp, result)
        currMax = Math.max(currMax, node.val)
        currMin = Math.min(currMin,node.val)
        dfsUtil(node.left,currMax,currMin)
        dfsUtil(node.right,currMax,currMin)
    }
    
    dfsUtil(root,root.val,root.val)
    return result
};