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
    
    const log = function(args) {
        console.log(args)
    }
    let ans = Infinity, c = 0
    const inorder = function(root) {
        if(root) {
            inorder(root.left)
            c++
            if(c == k) {
                ans = root.val
            }
            inorder(root.right)
        }
    }
    inorder(root)
    return ans
};