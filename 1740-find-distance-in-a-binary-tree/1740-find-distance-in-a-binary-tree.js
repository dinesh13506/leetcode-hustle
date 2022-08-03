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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function(root, p, q) {
    
    let metadata = new Map()
    let lcs = null
    let preorder = (node,parent) => {
        if(node) {
            metadata.set(node.val, [parent ? parent : null, node])
            preorder(node.left, node.val)
            preorder(node.right, node.val)
        }
    }
    preorder(root)
    //console.log(metadata, metadata.get())
    let node = p
    let path = new Set()
    while(node != null) {
        path.add(node)
        node = metadata.get(node)[0]
    }
    //console.log(path)
    node = q
    while(node != null) {
        if(path.has(node)) {
            lcs = metadata.get(node)[1]
            break
        }
        path.add(node.val)
        node = metadata.get(node)[0]
    }
    let length = 0
    node = p
    while(node != lcs.val) {
        length++
        node = metadata.get(node)[0]
    }
    node = q
    while(node != lcs.val) {
        length++
        node = metadata.get(node)[0]
    }
    return length
};