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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 let possible_subroots = []
 var isSubtree = function(root, subRoot) {
     possible_subroots = []
     
     preorder_traversal(root, subRoot)
     for( let i = 0; i < possible_subroots.length; i++) {
         let p = possible_subroots[i]
         let q = subRoot
         if(is_same(p,q)) {
             return true
         }
     }
     return false
     
 };
 
 
 let preorder_traversal = function(root,subRoot) {
     if(root) {
         if(root.val == subRoot.val) {
             possible_subroots.push(root)
         }
         preorder_traversal(root.left,subRoot)
         preorder_traversal(root.right,subRoot)
     }
 }
 
 let is_same = function(p,q) {
     
     if(p == null && q == null ) {
         return true
     } else if( p && !q) {
         return false
     } else if( !p && q) {
         return false
     }else {
         
         if(p.val != q.val) {
             return false
         }
         return is_same(p.left,q.left) && is_same(p.right,q.right)
     }
 }