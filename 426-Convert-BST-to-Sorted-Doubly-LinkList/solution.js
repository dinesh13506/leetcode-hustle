/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 let prev = null
 let head = null
 var treeToDoublyList = function(root) {
     
     if(root == null) {
         return null
     }
     prev = null
     head = null
     inorder(root)
     head.left = prev
     prev.right = head
     return head
 };
 
 
 let inorder = function(root) {
     if(root == null) {
         return null
     }
     inorder(root.left)
     if(prev == null) {
         head = root
     } else {
         root.left = prev
         prev.right = root
     }
     prev = root
     inorder(root.right)
 }