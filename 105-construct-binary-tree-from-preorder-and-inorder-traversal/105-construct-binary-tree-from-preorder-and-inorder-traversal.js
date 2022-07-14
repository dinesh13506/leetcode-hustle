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
    
    let map = new Map()
    for(let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    
    
    let preIndex = 0
    let build = (in_start, in_end) => {
        
        if(in_start > in_end) {
            return null
        }
        let root = new TreeNode(preorder[preIndex])
        let index = map.get(preorder[preIndex])
        preIndex++
        root.left = build(in_start, index - 1)
        root.right = build(index + 1, in_end)
        return root
    }
    return build(0, inorder.length-1)
};