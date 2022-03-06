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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
 let arr = []
 var closestKValues = function(root, target, k) {
     
     arr = []
     inorder(root)
     return finkclosest(root,arr,target,k)
 };
 
 
 let inorder = function(root) {
     if(root){
         inorder(root.left)
         arr.push(root)
         inorder(root.right)
     }
 }
 
 let finkclosest = function(root,arr,target,k) {
     let diff = Number.MAX_SAFE_INTEGER
     let closest = root
     while(root) {
         let d = Math.abs(target-root.val)
         if(d < diff) {
             diff = d
             closest = root
         }
         root = (target < root.val) ? root.left : root.right
     }
     let j = 0
     for( let i = 0 ; i < arr.length; i++) {
         if(arr[i] == closest) {
             j = i
             break
         }
     }
     
     console.log(j)
     let ans = [closest.val]
     let i = j - 1
     j = j + 1
     k--
     while(k>0 && i >=0 && j < arr.length) {
         let d1 = Math.abs(arr[i].val-target)
         let d2 = Math.abs(arr[j].val - target)
         if(d1 < d2) {
             ans.push(arr[i].val)
             i--
         } else {
             ans.push(arr[j].val)
             j++
         }
         k--
     }
     while(k > 0 && i>=0) {
         ans.push(arr[i].val)
         i--
         k--
     }
     while(k > 0 && j < arr.length ) {
         ans.push(arr[j].val)
         j++
         k--
     }
     
     return ans
     
 }