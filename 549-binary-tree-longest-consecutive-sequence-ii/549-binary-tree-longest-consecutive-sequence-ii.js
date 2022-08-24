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
var longestConsecutive = function(root) {
    
    let max = 0
    let dfs = (node) => {
        if(node) {
            let inr = 1, dcr = 1
            let left = dfs(node.left)
            if(node.left && node.val == node.left.val - 1) {
                inr = Math.max(inr, left[0] + 1)
            }
            if(node.left && node.val == node.left.val + 1) {
                dcr = Math.max(dcr, left[1] + 1)
            }
            
            let right = dfs(node.right)
            if(node.right && node.val == node.right.val - 1) {
                inr = Math.max(inr, right[0] + 1)
            }
            if(node.right && node.val == node.right.val + 1) {
                dcr = Math.max(dcr, right[1] + 1)
            }
            
            max = Math.max(max, inr + dcr - 1)
            return [inr, dcr]
            
        } else {
            return [0,0]
        }
    }
    dfs(root)
    return max
};