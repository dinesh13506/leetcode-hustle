/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let parentMap = new Map()
    let nodeMap = new Map()
    let preorder = function(node,parent) {
        if(node) {
            parentMap.set(node.val,parent)
            nodeMap.set(node.val, node)
            preorder(node.left, node)
            preorder(node.right, node)
        }
    }
    
    preorder(root, undefined)
    
    let ptr = p ? nodeMap.get(p.val) : undefined
    let path = new Set()
    while(ptr) {
        path.add(ptr.val)
        ptr = parentMap.get(ptr.val)
    }
    
    ptr = q ? nodeMap.get(q.val) : undefined
    while(ptr) {
        if(path.has(ptr.val)) {
            return nodeMap.get(ptr.val)
        }
        ptr = parentMap.get(ptr.val)
    }
    return null
};