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
    
    const ans = []
    if(root == null) {
        return ans
    }
    let q = new Queue()
    q.enqueue([root, [root.val], root.val])
    while(q.isEmpty() == false) {
        let [currNode, path, currSum] = q.dequeue()
        if(currSum == targetSum && currNode.left == null && currNode.right == null) {
            ans.push(path)
        }
        if(currNode.left) {
            let leftPath = path.slice()
            leftPath.push(currNode.left.val)
            q.enqueue([currNode.left, leftPath, currSum + currNode.left.val])
        }
        if(currNode.right) {
            let rightPath = path.slice()
            rightPath.push(currNode.right.val)
            q.enqueue([currNode.right, rightPath, currSum + currNode.right.val])
        }
    }
    return ans
    
};