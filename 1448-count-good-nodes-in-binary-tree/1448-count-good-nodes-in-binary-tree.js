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
var goodNodes = function(root) {
    
    let goodNodes = 0
    let preorder = (currNode, maxOnPath) => {
        if(currNode) {
            if(maxOnPath <= currNode.val) {
                goodNodes++
            }
            preorder(currNode.left, Math.max(maxOnPath, currNode.val))
            preorder(currNode.right, Math.max(maxOnPath, currNode.val))
        }
    }
    preorder(root, -Infinity)
    return goodNodes
};