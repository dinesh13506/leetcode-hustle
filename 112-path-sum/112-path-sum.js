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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    let preorder = (node, sum) => {
        if(node) {
            sum = sum - node.val
            if(sum ==0 && node.left == null && node.right == null) {
                return true
            }
            return preorder(node.left, sum) || preorder(node.right, sum)
            
        } else {
            return false
        }
    }
    
    return preorder(root, targetSum)
};