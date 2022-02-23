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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    
    let result = []
    let path = []
    helper(root,path,result,targetSum)
    return result
};


let helper = function(root,path,result,remainingSum) {
    if(root == null) {
        return result
    }
    path.push(root.val)
    if(root.val == remainingSum && ischild(root)) {
        result.push(path.slice())
    }
    helper(root.left,path,result,remainingSum - root.val)
    helper(root.right,path,result,remainingSum - root.val)
    path.pop()
}

let ischild = function(root) {
    if(root && root.left==null && root.right==null) {
        return true
    }
    return false
}