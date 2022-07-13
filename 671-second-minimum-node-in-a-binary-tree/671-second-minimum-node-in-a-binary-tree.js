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
var findSecondMinimumValue = function(root) {
   let arr = []
   
   let preorder = function(node) {
       if(node) {
           preorder(node.left)
          
           arr.push(node.val)
           
           preorder(node.right)
       }
   }
   
   preorder(root)
   
   let set = new Set()
   for(let num of arr) {
       set.add(num)
   }
   arr = Array.from(set)
   arr.sort((a,b) => {return a - b})
   if(arr.length > 1) {
       return arr[1]
   }
   return -1
    
};