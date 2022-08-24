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
    
    let length = 0
    
    let dfs = (node) => {
        if(node == null) {
            return 0
        }
        let llen = 1, rlen = 1
        let left = dfs(node.left)
        if(node.left && node.val == node.left.val - 1) {
            llen = Math.max(llen, left + 1)
        }
        let right = dfs(node.right)
        if(node.right && node.val == node.right.val - 1) {
            rlen = Math.max(rlen, right + 1)
        }
        length = Math.max(length, Math.max(rlen, llen))
        return Math.max(rlen, llen)
        
    }
    dfs(root)
    return length
};