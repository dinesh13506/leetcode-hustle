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
let count = 0
var pathSum = function(root, targetSum) {
    
    count = 0
    let preorder = (node) => {
        if(node) {
            getPathCount(node, targetSum)
            preorder(node.left)
            preorder(node.right)
        }
    }
    preorder(root)
    return count
};


let getPathCount = (node,targetSum) => {
    if(node) {
        if(node.val == targetSum) {
            count++
        }
        return getPathCount(node.left ,targetSum - node.val) + getPathCount(node.right, targetSum - node.val)
    }
}