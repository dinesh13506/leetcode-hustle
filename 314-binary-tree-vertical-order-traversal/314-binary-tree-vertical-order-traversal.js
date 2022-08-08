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
var verticalOrder = function(root) {
    
    let answer = []
    if(!root) {
        return answer
    }
    let map = new Map()
    
    let queue = new Queue()
    queue.enqueue([root, 0])
    while(queue.size()) {
        let [node,col] = queue.dequeue()
        if(map.has(col) == false) {
            map.set(col, [])
        }
        map.get(col).push(node.val)
        if(node.left) {
            queue.enqueue([node.left, col - 1])
        }
        if(node.right) {
            queue.enqueue([node.right, col + 1])
        }
    }
    
    //console.log(map)
    let cols = [...map.keys()]
    cols.sort((a,b) => { return a - b })
    for(let col of cols) {
        answer.push(map.get(col))
    }
    return answer
    
};