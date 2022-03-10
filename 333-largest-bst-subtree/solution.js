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
 let ans = 0
 var largestBSTSubtree = function(root) {
     ans = 0
     postorder(root)
     return ans
 };
 
 let postorder = function(root) {
     
     if(root==null) {
         return { 
             nodes: 0,
             max: Number.MIN_SAFE_INTEGER,
             min:Number.MAX_SAFE_INTEGER
         }
     }
     if(root.left == null && root.right==null) {
         ans = Math.max(ans,1)
         return { 
             nodes: 1,
             max: root.val,
             min:root.val
         }
     }
     
     let leftResponse = postorder(root.left)
     let rightResponse = postorder(root.right)
     if(leftResponse && rightResponse && root.val > leftResponse.max && root.val<rightResponse.min) {
         ans = Math.max(ans,1+leftResponse.nodes+rightResponse.nodes)
         return { 
             nodes: 1+leftResponse.nodes+rightResponse.nodes,
             max: Math.max(root.val,Math.max(leftResponse.max,rightResponse.max)),
             min:Math.min(root.val,Math.min(leftResponse.min,rightResponse.min))
         }
     }
     
    
 }