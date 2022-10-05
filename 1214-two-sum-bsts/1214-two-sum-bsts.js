/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    
    let set = new Set()
    let preorder = (node) => {
        if(node) {
            if(set.has(node.val) == false) set.add(node.val)
            preorder(node.left)
            preorder(node.right)
        }
    }
    
    preorder(root1)
    let preorder2 = (node) => {
        if(node) {
            let x = target - node.val
            if(set.has(x)) {
                return true
            } else {
                return preorder2(node.left) ||  preorder2(node.right)
            }
        } else {
            return false
        }
    }
    
    return preorder2(root2)
    
};