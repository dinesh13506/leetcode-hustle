/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    let indexmap = new Map()
    const n = inorder.length
    
    for(let index = 0; index < n; index++) {
        let tnodeval = inorder[index]
        indexmap.set(tnodeval, index)
    }
    
    
    let pre_index = 0
    let construct = (in_start, in_end) => {
        if(in_start > in_end) {
            return null
        }
        
        let rootval = preorder[pre_index]
        let root = new TreeNode(rootval)
        pre_index++
        let mid = indexmap.get(rootval)
        root.left = construct(in_start, mid - 1)
        root.right = construct(mid + 1, in_end)
        return root
    }
    
    return construct(0, n-1)
};