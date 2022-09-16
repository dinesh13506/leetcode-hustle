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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    
    let trim = (node) => {
        if(node) {
            let l = trim(node.left)
            let r = trim(node.right)
            if(node.val >= low && node.val <= high) {
                node.left = l
                node.right = r
                return node
            } else if(l) {
                return l
            } else if(r) {
                return r
            } else {
                return null
            }
            
        } else {
            return null
        }
    }
    
    
    return trim(root)
};