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
 * @return {number}
 */

 let paths = []
 var sumRootToLeaf = function(root) {
     
     let path = []
     paths = []
     preorder(root,path)
     let sum = 0
     for( let p of paths) {
         sum = sum + binarytonum(p)
     }
     return sum
 };
 
 let preorder = function( root, path ) {
     if(root) {
         path.push(root.val)
         if(root.left == null && root.right == null) {
            paths.push(path.slice())
         }
         preorder(root.left,path)
         preorder(root.right,path)
         path.pop()
     }
 }
 
 let binarytonum = function(arr) {
     let num = 0
     let pow = 0
     let length = arr.length 
     for(let i=length-1; i>=0; i--) {
         num = num + ( arr[i] * Math.pow(2,pow) )
         pow++
     }
     return num
 }