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
 * @return {TreeNode}
 */

 let arr = []
 var balanceBST = function(root) {
     arr = []
     inorder(root)
     return construct(arr,0,arr.length-1)
 };
 
 
 let inorder = function(root) {
     if(root) {
         inorder(root.left)
         arr.push(root)
         inorder(root.right)
     }
 }
 
 
 let construct = function(arr,start,end) {
     if(start > end) {
         return null
     }
     
     let mid = parseInt((start+end)/2)
     let root = arr[mid]
     root.left = construct(arr,start,mid-1)
     root.right = construct(arr,mid+1,end)
     return root
 }