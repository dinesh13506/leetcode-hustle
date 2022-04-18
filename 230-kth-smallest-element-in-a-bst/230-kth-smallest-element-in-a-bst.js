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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let stack = new Array(), p = root
    while(true) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        k--
        if(k == 0) {
            return p.val
        }
        p = p.right
    }
};