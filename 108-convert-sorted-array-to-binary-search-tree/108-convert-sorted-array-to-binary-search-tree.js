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
    
    const n = nums.length
    let start_index = 0, end_index = n - 1
    
    let build = (start_index, end_index) => {
        if(start_index > end_index) {
            return null
        }
        let mid_index = start_index + parseInt((end_index - start_index)/2)
        let node = new TreeNode(nums[mid_index])
        node.left = build(start_index, mid_index - 1)
        node.right = build(mid_index + 1, end_index)
        return node
    }
    
    return build(start_index, end_index)
};