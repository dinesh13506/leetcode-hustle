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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ans = []
    if(!root) {
        return ans
    }
    let preorder = (node, path, sum) => {
        if(node) {
            if(node.left == null && node.right == null && node.val == sum) {
                path.push(node.val)
                ans.push(path.slice())
                path.pop()
                return
            }
            path.push(node.val)
            preorder(node.left, path, sum - node.val)
            preorder(node.right, path, sum - node.val)
            path.pop()
            
        } else {
            return "done"
        }
    }
    preorder(root, [], targetSum)
    return ans
};