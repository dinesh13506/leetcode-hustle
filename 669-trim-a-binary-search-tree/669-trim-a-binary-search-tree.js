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
            let left = trim(node.left)
            let right = trim(node.right)
            if(node.val >= low && node.val <= high) {
                node.left = left
                node.right = right
                return node
            } else if(node.val < low) {
                return right
            }
            else return left
            
        } else {
            return null
        }
    }
    return trim(root)
};