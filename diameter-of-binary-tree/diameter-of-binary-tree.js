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
let diameter = 0
var diameterOfBinaryTree = function(root) {
    diameter = 0
    if( root == null ) {
        return 0
    }
    height(root)
    return diameter
    
    
};


let height = function(root ) {
    if( root == null ) {
        return 0
    }
    
    let left_h = height( root.left)
    let right_h = height(root.right)
    
    diameter = Math.max(diameter, left_h + right_h)
    return 1 + Math.max( left_h, right_h)
}