/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    let answer = []
    if(root == null) {
        return answer
    }
    
    let parentmap = new Map()
    let preorder = (node, parent) => {
        if(node) {
            parentmap.set(node.val, parent)
            preorder(node.left, node)
            preorder(node.right,node)
        }
    }
    
    preorder(root, null)
    
    //console.log(parentmap)
    
    let visited = new Set()
    let distance = -1
    let queue = new Queue()
    queue.enqueue(target)
    visited.add(target.val)
    while(queue.size()) {
        distance++
        //console.log(distance,queue)
        if(distance == k) {
            let arr = []
            for(let node of queue.toArray()) {
                arr.push(node.val)
            }
            return arr
        }
        let nextlevel = new Queue()
        while(queue.size()) {
            let node = queue.dequeue()
            if(node.left && visited.has(node.left.val) == false) {
                nextlevel.enqueue(node.left)
                visited.add(node.left.val)
            }
            if(node.right && visited.has(node.right.val) == false) {
                nextlevel.enqueue(node.right)
                visited.add(node.right.val)
            }
            
            if(parentmap.get(node.val) && visited.has(parentmap.get(node.val).val) == false) {
                nextlevel.enqueue(parentmap.get(node.val))
                visited.add(parentmap.get(node.val).val)
            }
        }
        queue = nextlevel
    }
    return []
};