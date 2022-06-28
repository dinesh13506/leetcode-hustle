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
            parentMap.set(node.val, parent)
            nodeMap.set(node.val, node)
            preorder(node.left, node)
            preorder(node.right, node)
        }
    }
    
    preorder(root)
    
    let path = new Set()
    let ptr = nodeMap.get(p.val)
    while(ptr) {
        path.add(ptr.val)
        ptr = parentMap.get(ptr.val)
    }
    ptr = nodeMap.get(q.val)
    while(ptr) {
        if(path.has(ptr.val)) {
            return nodeMap.get(ptr.val)
        }
        ptr = parentMap.get(ptr.val)
    }
    return null
};