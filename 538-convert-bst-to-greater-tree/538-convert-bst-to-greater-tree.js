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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0
    let inorderInReverse = function(root) {
        if(root == null) {
            return 0
        }
        inorderInReverse(root.right)
        sum = sum + root.val
        root.val = sum
        inorderInReverse(root.left)
        
    }
    inorderInReverse(root)
    return root
};