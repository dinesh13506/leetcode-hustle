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
 * @return {number[][]}
 */
 var findLeaves = function(root) {
    let result = []
    while(root && ( root.left || root.right) ) {
        let res = []
        preorder(root,null,res)
        result.push(res)
    }
    result.push([root.val])
    root = null
    return result
    
};

let preorder = function(root,parent,res) {
    if(root) {
        if(root.left == null && root.right == null) {
            res.push(root.val)
            if(parent) {
                if(parent.left == root) {
                    parent.left = null
                }
                else {
                    parent.right = null
                }
            }
            else {
                root = null
            }
            
        }
        preorder(root.left,root,res)
        preorder(root.right,root,res)
    }
}