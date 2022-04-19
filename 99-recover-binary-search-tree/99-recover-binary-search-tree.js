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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    
    let stack = [], prev = new TreeNode(-Infinity), swaps = []
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(prev.val > root.val) {
            if(swaps.length >= 2) {
                swaps.pop()
                swaps.push(root)
            } else {
                swaps.push(prev)
                swaps.push(root)
            }
        }
        prev = root
        root = root.right
    }
    let node1 = swaps[0], node2 = swaps[1]
    let t = node1.val
    node1.val = node2.val
    node2.val = t
};