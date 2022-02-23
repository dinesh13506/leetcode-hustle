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
 * @return {number[]}
 */
 let count_map = {}
 var findFrequentTreeSum = function(root) {
     let result = []
     count_map = {}
     helper(root)
     //console.log(count_map)
     let sorted = Object.keys(count_map).sort(function(a,b) { return count_map[b] - count_map[a]})
     let largest = count_map[sorted[0]]
     let i = 0 
     while( i < sorted.length && largest == count_map[sorted[i]]) {
         result.push(parseInt(sorted[i]))
         i++
     }
     return result
 };
 
 
 let helper = function(root) {
     if(root == null) {
         return 0
     }
     let lsum = helper(root.left)
     let rsum = helper(root.right)
     let sum = root.val + lsum + rsum
     if(count_map[sum]) {
         count_map[sum]++
     }
     else {
         count_map[sum] = 1
     }
     return sum
 }