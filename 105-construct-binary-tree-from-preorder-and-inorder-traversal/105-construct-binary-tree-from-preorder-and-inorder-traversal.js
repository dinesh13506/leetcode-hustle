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
    
    let index_map = new Map()
    for(let index = 0; index < inorder.length; index++) {
        index_map.set(inorder[index], index)
    }
    let build = (pre_start, pre_end, inorder_start, inorder_end) => {
        
        if(pre_start > pre_end || inorder_start > inorder_end) {
            return null
        }
        
        let value = preorder[pre_start]
        let node = new TreeNode(value)
        let index = index_map.get(value)
        let length1 = index - inorder_start
        let length2 = inorder_end - index
        node.left = build(pre_start + 1, pre_start + length1, inorder_start, index - 1)
        node.right = build(pre_start + length1 + 1, pre_start +  length1 + length2, index + 1, inorder_end)
        return node
    }
    let pre_start = 0, pre_end = preorder.length - 1
    let inorder_start = 0, inorder_end = inorder.length - 1
    return build(pre_start, pre_end, inorder_start, inorder_end)
};