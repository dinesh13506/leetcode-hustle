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
 var getLonelyNodes = function(root) {
    let result = []
    helper(root,null,result)
    return result
};

let helper = function(root,parent,result) {
    if(root) {
        if(parent && (parent.left == null || parent.right == null) ) {
            result.push(root.val)
        }
        
        helper(root.left,root,result)
        helper(root.right,root,result)
    }
}