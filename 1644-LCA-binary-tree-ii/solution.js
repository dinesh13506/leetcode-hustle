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
    if(root == null) {
        return null
    }
    if( !p || !q) {
        return null
    }
    if( !find(root,p) || !find(root,q) ) {
        return null
    }
    
    return helper(root,p,q)
};
    


let helper = function(root,p,q) {
    if(root == null) {
        return null
    }
    if(root.val == p.val || root.val == q.val) {
        return root
    }
    
    let lca1 = helper(root.left,p,q)
    let lca2 = helper(root.right,p,q)
    if(lca1 && lca2) {
        return root
    }
    if(lca1) {
        return lca1
    }
    return lca2
}
let find = function(root,p) {
    if(root) {
        if(root.val == p.val) {
            return true
        }
        return find(root.left,p) || find(root.right,p)
    } else {
        return false
    }
}