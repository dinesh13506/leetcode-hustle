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
 let map = {}
 var lowestCommonAncestor = function(root, nodes) {
     map = {}
     for(let node of nodes) {
         map[node.val] = true
     }
     return helper(root)
 };
 
 
 let helper = function(root) {
     
     if(root == null) {
         return null
     }
     if(map[root.val]) {
         return root
     }
     let lca1 = helper(root.left)
     let lca2 = helper(root.right)
     if(lca1 && lca2) {
         return root
     }
     if(lca1) {
         return lca1
     }
     return lca2
 }