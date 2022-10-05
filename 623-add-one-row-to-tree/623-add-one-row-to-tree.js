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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if(depth == 1) {
        let newroot = new TreeNode(val)
        newroot.left = root
        return newroot
    }
    
    let nodes = []
    let queue = new Queue()
    queue.enqueue([root, 1])
    while(!queue.isEmpty()) {
        let [node, currdepth] = queue.dequeue()
        if(currdepth == depth - 1) {
            nodes.push(node)
        }
        else {
            if(node.left) {
                queue.enqueue([node.left, currdepth + 1])
            }
            if(node.right) {
                queue.enqueue([node.right, currdepth + 1])
            }
        }
    }
    for(let node of nodes) {
        let lefts = node.left
        let node1 = new TreeNode(val)
        node1.left = lefts
        node1.right = null
        node.left = node1
        
        let rights = node.right
        let node2 = new TreeNode(val)
        node2.left = null
        node2.right = rights
        node.right = node2
        
    }
    
    return root
};