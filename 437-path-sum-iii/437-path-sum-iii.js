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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
    let count = 0
    
    let dfs = (node,sum) => {
        if(node) {
            if(sum + node.val == targetSum) {
                count++
            }
            dfs(node.left, sum + node.val)
            dfs(node.right, sum + node.val)
        }
    }
    
    let preorder = (node) => {
        if(node) {
            dfs(node,0)
            preorder(node.left)
            preorder(node.right)
        }
    }
    preorder(root)
    return count
};