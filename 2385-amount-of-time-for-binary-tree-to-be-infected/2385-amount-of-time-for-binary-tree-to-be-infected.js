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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    
    let nodemap = new Map()
    let parent = new Map()
    let preorder = (node, pnode) => {
        if(node) {
            nodemap.set(node.val, node)
            parent.set(node.val, pnode)
            preorder(node.left, node)
            preorder(node.right, node)
        }
    }
    preorder(root, null)
    //console.log(parent)
    
    let queue = new Queue()
    queue.enqueue(nodemap.get(start))
    let visited = new Set()
    visited.add(start)
    let time = -1
    while(queue.isEmpty() == false) {
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let node = queue.dequeue()
            //console.log(node)
            if(parent.has(node.val)) {
                let p = parent.get(node.val)
                if( p && visited.has(p.val) == false) {
                    visited.add(p.val)
                    temp.enqueue(p)
                }
            }
            if(node.left && visited.has(node.left.val) == false) {
                    visited.add(node.left.val)
                    temp.enqueue(node.left)
            }
            if(node.right && visited.has(node.right.val) == false) {
                    visited.add(node.right.val)
                    temp.enqueue(node.right)
            }
        }
        queue = temp
        time++
    }
    return time
};