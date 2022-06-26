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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    let ans = []
    if(root == null) {
        return ans
    }
    let q = new Queue()
    q.enqueue(root)
    while(q.isEmpty() == false) {
        let temp = new Queue()
        let arr = []
        while(q.isEmpty() == false) {
            let node = q.dequeue()
            if(node.left) {
                temp.enqueue(node.left)
            }
            if(node.right) {
                temp.enqueue(node.right)
            }
            arr.push(node.val)
        }
        ans.push(arr)
        q = temp
    }
    return ans
};