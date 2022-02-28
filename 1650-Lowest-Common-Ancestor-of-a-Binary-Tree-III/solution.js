/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var lowestCommonAncestor = function(p, q) {
    
    let root = findroot(p)
    return lca(root,p,q)
};


let findroot = function(node) {
    if(node == null ) {
        return null
    }
    
    if(node.parent == null) {
        return node
    }
    return findroot(node.parent)
}


let lca = function(root,p,q) {
    if(root == null) {
        return null
    }
    
    if(root.val == p.val || root.val == q.val) {
        return root
    }
    
    let lca1 = lca(root.left,p,q)
    let lca2 = lca(root.right,p,q)
    
    if(lca1 != null && lca2 != null) {
        return root
    }
    if(lca1) {
        return lca1
    }
    return lca2
}