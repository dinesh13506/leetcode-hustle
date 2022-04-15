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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    
    if(root == null) {
        return root
    }
    //find root
    while(root && (root.val < low  || root.val > high)) {
        if(root.val < low) {
            root = root.right
        }
        if(root.val > high) {
            root = root.left
        }
    }
    if(root==null) {
        return root
    }
    let stack = []
    stack.push(root)
    while(stack.length) {
        let curr = stack.pop()
        let leftNode = curr.left
        let rightNode = curr.right
        //trim left
        while(leftNode && leftNode.val < low) {
            leftNode = leftNode.right
        }
        //trim right
        while(rightNode && rightNode.val > high) {
            rightNode = rightNode.left
        }
        curr.left = leftNode
        curr.right = rightNode
        if(curr.left) {
            stack.push(curr.left)
        }
        if(curr.right) {
            stack.push(curr.right)
        }
    }
    return root
    
};