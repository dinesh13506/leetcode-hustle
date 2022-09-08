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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let answer = []
    let curr = root
    let pre;
    while(curr) {
        if(curr.left == null) {
            answer.push(curr.val)
            curr = curr.right
        } else {
            pre = curr.left
            while(pre.right) {
                pre = pre.right
            }
            pre.right = curr
            let temp = curr
            curr = curr.left
            temp.left = null
        }
    }
    return answer
};