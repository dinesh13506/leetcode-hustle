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
var minCameraCover = function(root) {
    
    const CAMERA_NOT_REQUIRED = "cam_not_required"
    const CAMERA_REQUIRED = "cam_required"
    const CAMERA_GIVEN = "cam_already_given"
    
    let count = 0
    
    let dfs = function(root) {
        if(root == null) {
            return CAMERA_NOT_REQUIRED
        }
        
        let leftResponse = dfs(root.left)
        let rightResponse = dfs(root.right)
        
        if(leftResponse == CAMERA_REQUIRED || rightResponse == CAMERA_REQUIRED) {
            count++
            return CAMERA_GIVEN
        }
        if(leftResponse == CAMERA_GIVEN || rightResponse == CAMERA_GIVEN) {
            return CAMERA_NOT_REQUIRED
        }
        return CAMERA_REQUIRED
    }
    
    return dfs(root) == CAMERA_REQUIRED ? count + 1 : count
};