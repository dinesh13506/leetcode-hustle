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
var diameterOfBinaryTree = function(root) {
    
    let maxDia = 0
    let dfs = (node) => {
        if(node == null) {
            return 0
        }
        let l = dfs(node.left), r = dfs(node.right)
        maxDia = Math.max(l+r, maxDia) // l = max number of nodes from left, r = max number of nodes from right
        return 1 + Math.max( l , r )
    }
    dfs(root)
    return maxDia
};