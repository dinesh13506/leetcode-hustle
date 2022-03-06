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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 let x = null
 let y = null
 let pred = null
 var recoverTree = function(root) {
     x = null, y=null,pred = null
     inorder(root)
     //console.log(x,y)
     let temp = x.val
     x.val = y.val
     y.val = temp
     return root
 };
 
 //morris inorder
 let inorder = function(root) {
     
     let curr = root
     while(curr!=null) {
         
         if(curr.left==null) {
             if(pred && pred.val > curr.val) {
                 y = curr
                 if( x == null) {
                     x = pred
                 }
             }
             pred = curr
             curr = curr.right
         } else {
             let prev = curr.left
             while(prev.right && prev.right != curr) {
                 prev = prev.right
             }
             
             if(prev.right == null) {
                 prev.right = curr
                 curr = curr.left
             } else {
                 prev.right = null
                 if(pred && pred.val > curr.val) {
                     y = curr
                     if( x == null ) {
                         x = pred
                     }
                 }
                 pred = curr
                 curr = curr.right
             }
         }
     }
 }