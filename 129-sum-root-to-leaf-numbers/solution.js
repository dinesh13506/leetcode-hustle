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
 var sumNumbers = function(root) {
     let sum = 0
     paths = []
     let path = []
     preorder(root,path)
     //console.log(paths)
     for( let p of paths) {
         let num = parseInt(p.join(''))
         sum = sum + num
     }
     return sum
     
 };
 
 let preorder = function(root,path) {
     if(root) {
         path.push(root.val)
         if(root.left == null && root.right==null) {
             paths.push(path.slice())
         }
         preorder(root.left,path)
         preorder(root.right,path)
         path.pop()
     }
 }