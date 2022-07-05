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
var longestConsecutive = function(root) {
    
    let ans = 1
    let preorder = function(node, prev, count) {
        ans = Math.max(ans,count)
        if(node) {
            //console.log( " node = " , node.val,  " prev = " , prev ? prev.val : null, count)
            if(prev && (prev.val + 1 == node.val)) {
                preorder(node.left, node, count + 1)
            } else {
                preorder(node.left, node, 1)
            }
            //console.log("left done")
            //console.log( " node = " , node.val,  " prev = " , prev ? prev.val : null, count)
            if(prev && (prev.val + 1 == node.val)) {
                //console.log("hey")
                preorder(node.right, node, count + 1)
            } else {
                preorder(node.right, node, 1)
            }
            //console.log("right done")
        }
    }
    preorder(root, null, 1)
    return ans
};