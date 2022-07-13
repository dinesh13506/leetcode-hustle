/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    let root = null
    let buildTree = (start, end) => {
        if(end < start) {
            return null
        }
        
        let mid = start + parseInt((end - start)/2)
        let node = new TreeNode(nums[mid])
        node.left = buildTree(start, mid - 1)
        node.right = buildTree(mid + 1, end)
        return node
    }
    return buildTree(0, nums.length-1)
};