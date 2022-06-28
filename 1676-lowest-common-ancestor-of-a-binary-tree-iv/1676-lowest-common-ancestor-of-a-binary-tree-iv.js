/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    
    let parentMap = new Map()
    let nodeMap = new Map()
    
    let preorder = (node, parent) => {
        if(node) {
            parentMap.set(node.val, parent)
            nodeMap.set(node.val, node)
            preorder(node.left, node)
            preorder(node.right, node)
        }
    }
    
    preorder(root, undefined)
    
    let freqMap = new Map()
    
    for(let node of nodes) {
        let ptr = node ? nodeMap.get(node.val) : undefined
        while(ptr) {
            freqMap.set(ptr.val, (freqMap.get(ptr.val) || 0) + 1)
            if(freqMap.get(ptr.val) == nodes.length) {
                return nodeMap.get(ptr.val)
            }
            ptr = parentMap.get(ptr.val)
        }
    }
    return null
};