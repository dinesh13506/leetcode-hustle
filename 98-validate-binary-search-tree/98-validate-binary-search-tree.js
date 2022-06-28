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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    return isvalid(root, -Infinity, Infinity)
};

let isvalid = (node, min, max) => {
    if(node == null) {
        return true
    }
    if(node.val <= min || node.val >= max) {
        return false
    }
    return isvalid(node.left, min, node.val) && isvalid(node.right, node.val,max)
}